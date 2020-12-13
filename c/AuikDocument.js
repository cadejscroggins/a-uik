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
}) => {
  return (
    <Html>
      <Head />
      <body>
        {!!privateRouteRedirect && !!publicRouteRedirect && (
          <AuthRedirectScript
            isPrivateRoute={isPrivateRoute}
            isPublicRoute={isPublicRoute}
            page={page}
            privateRouteRedirect={privateRouteRedirect}
            publicRouteRedirect={publicRouteRedirect}
          />
        )}
        {!!initialColorMode && (
          <ColorModeScript initialColorMode={initialColorMode} />
        )}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default AuikDocument;
