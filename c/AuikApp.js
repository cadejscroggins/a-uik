import * as apollo from '@apollo/client';
import Amplify, { Auth } from 'aws-amplify';
import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { createAuthLink } from 'aws-appsync-auth-link';
import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link';
import AuikContent from './AuikContent';

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

const httpLink = apollo.createHttpLink({
  uri: process.env.apiGraphqlEndpoint,
});

const apolloClient = new apollo.ApolloClient({
  cache: new apollo.InMemoryCache(),
  link: apollo.from([
    createAuthLink(appsyncLinkConfig),
    apollo.split(
      (op) => op.query.definitions[0].operation === 'subscription',
      createSubscriptionHandshakeLink(appsyncLinkConfig, httpLink),
      httpLink
    ),
  ]),
});

const AuikApp = (props) => (
  <ApolloProvider client={apolloClient}>
    <AuikContent {...props} />
  </ApolloProvider>
);

export default AuikApp;
