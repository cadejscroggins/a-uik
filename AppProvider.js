import Amplify, { Auth } from 'aws-amplify';
import React from 'react';
import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/react-hooks';
import { ChakraProvider, extendTheme } from '@chakra-ui/core';
import { DefaultSeo } from 'next-seo';
import { createAuthLink } from 'aws-appsync-auth-link';
import { createHttpLink } from 'apollo-link-http';
import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link';
import { setContext } from 'apollo-link-context';

Amplify.configure({
  Auth: {
    identityPoolId: process.env.authIdentityPoolId,
    mandatorySignIn: process.env.authMandatorySignIn === 'true',
    region: process.env.authRegion,
    userPoolId: process.env.authUserPoolId,
    userPoolWebClientId: process.env.authUserPoolWebClientId,
  },
});

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([
    createAuthLink({
      auth: {
        credentials: Auth.currentCredentials,
        type: process.env.apiAuthenticationType,
      },
      region: process.env.apiRegion,
      url: process.env.apiGraphqlEndpoint,
    }),
    createSubscriptionHandshakeLink(
      process.env.apiGraphqlEndpoint,
      ApolloLink.from([
        setContext((request, previousContext) => previousContext),
        createHttpLink({ uri: process.env.apiGraphqlEndpoint }),
      ])
    ),
  ]),
});

const AppProvider = ({ children, seo, theme }) => (
  <ApolloProvider client={apolloClient}>
    <ChakraProvider resetCSS theme={extendTheme(theme)}>
      <DefaultSeo {...seo} />
      {children}
    </ChakraProvider>
  </ApolloProvider>
);

export default AppProvider;
