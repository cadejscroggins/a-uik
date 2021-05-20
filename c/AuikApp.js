import * as A from '@apollo/client';
import Amplify, { Auth } from 'aws-amplify';
import React from 'react';
import { createAuthLink } from 'aws-appsync-auth-link';
import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setContext } from '@apollo/client/link/context';
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
  <A.ApolloProvider
    client={
      new A.ApolloClient({
        cache: new A.InMemoryCache(),
        link: A.from([
          setContext(async () => ({
            headers: {
              jwt: (await Auth.currentAuthenticatedUser())?.signInUserSession
                ?.accessToken?.jwtToken,
            },
          })),
          createAuthLink(appsyncLinkConfig),
          createSubscriptionHandshakeLink(appsyncLinkConfig),
        ]),
      })
    }
  >
    <AuikContent {...props} />
  </A.ApolloProvider>
);

export default AuikApp;
