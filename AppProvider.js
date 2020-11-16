import Amplify, { Auth } from 'aws-amplify';
import GoogleFonts from 'next-google-fonts';
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
  split,
} from '@apollo/client';
import { ApolloProvider } from '@apollo/react-hooks';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import { createAuthLink } from 'aws-appsync-auth-link';
import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link';

Amplify.configure({
  Auth: {
    identityPoolId: process.env.authIdentityPoolId,
    mandatorySignIn: process.env.authMandatorySignIn === 'true',
    region: process.env.authRegion,
    userPoolId: process.env.authUserPoolId,
    userPoolWebClientId: process.env.authUserPoolWebClientId,
  },
});

const appsyncLinkConfig = {
  auth: {
    credentials: Auth.currentCredentials,
    type: process.env.apiAuthenticationType,
  },
  region: process.env.apiRegion,
  url: process.env.apiGraphqlEndpoint,
};

const httpLink = createHttpLink({ uri: process.env.apiGraphqlEndpoint });

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    createAuthLink(appsyncLinkConfig),
    split(
      (op) => op.query.definitions[0].operation === 'subscription',
      createSubscriptionHandshakeLink(appsyncLinkConfig, httpLink),
      httpLink
    ),
  ]),
});

const AppProvider = ({ children, fonts, seo, theme }) => (
  <ApolloProvider client={apolloClient}>
    <ChakraProvider resetCSS theme={extendTheme(theme)}>
      {fonts && <GoogleFonts href={fonts} />}
      <DefaultSeo {...seo} />
      {children}
    </ChakraProvider>
  </ApolloProvider>
);

AppProvider.defaultProps = {
  children: null,
  fonts: null,
  seo: {},
  theme: {},
};

export default AppProvider;
