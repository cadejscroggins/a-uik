import React from 'react';
import { ColorModeScript } from '@chakra-ui/react';
import { Head, Html, Main, NextScript } from 'next/document';
import AuthRedirectScript from './AuthRedirectScript';

const AuikDocument = ({
  __NEXT_DATA__: {
    page,
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
          page={page}
          privateRouteRedirect={privateRouteRedirect}
          publicRouteRedirect={publicRouteRedirect}
        />
      )}
    </Head>
    <body>
      <ColorModeScript initialColorMode={initialColorMode} />
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default AuikDocument;
