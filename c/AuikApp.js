import Amplify, { Auth } from 'aws-amplify';
import React from 'react';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  from,
} from '@apollo/client';
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

const AuikApp = (props) => (
  <ApolloProvider
    client={
      new ApolloClient({
        cache: new InMemoryCache(),
        link: from([
          createAuthLink(appsyncLinkConfig),
          createSubscriptionHandshakeLink(appsyncLinkConfig),
        ]),
      })
    }
  >
    <AuikContent {...props} />
  </ApolloProvider>
);

export default AuikApp;
