import React from 'react';
import { ColorModeScript } from '@chakra-ui/react';
import { Head, Html, Main, NextScript } from 'next/document';
import AuthRedirectScript from './AuthRedirectScript';

const AuikDocument = ({
  __NEXT_DATA__: {
    props: {
      pageProps: { isPrivateRoute, isPublicRoute },
    },
  },
  initialColorMode,
  privateRouteRedirect,
  publicRouteRedirect,
}) => (
  <Html>
    <Head>
      {!!privateRouteRedirect && !!publicRouteRedirect && (
        <AuthRedirectScript
          isPrivateRoute={isPrivateRoute}
          isPublicRoute={isPublicRoute}
          privateRouteRedirect={privateRouteRedirect}
          publicRouteRedirect={publicRouteRedirect}
        />
      )}
    </Head>
    <body>
      {initialColorMode && (
        <ColorModeScript initialColorMode={initialColorMode} />
      )}
      <Main />
      <NextScript />
    </body>
  </Html>
);

AuikDocument.defaultProps = {
  initialColorMode: null,
  privateRouteRedirect: null,
  publicRouterRedirect: null,
};

export default AuikDocument;
