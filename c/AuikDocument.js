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
  links,
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
      {links.map((link) => (
        <link
          key={link.href}
          as={link.as}
          href={link.href}
          rel={link.rel}
          type={link.type}
        />
      ))}
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
  fonts: [],
  initialColorMode: null,
  privateRouteRedirect: null,
  publicRouterRedirect: null,
};

export default AuikDocument;
