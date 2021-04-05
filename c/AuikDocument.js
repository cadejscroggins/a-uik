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
  fonts,
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
      {!!fonts.length && (
        <>
          {fonts.map((font) => (
            <link
              key={font.file}
              as="font"
              crossOrigin="anonymous"
              href={font.file}
              rel="preload"
              type="font/woff2"
            />
          ))}
          <style global jsx>
            {`
              ${fonts.reduce(
                (acc, font) =>
                  `${acc}@font-face{font-family:'${font.name}';font-style:normal;font-weight:${font.weight};font-display:swap;src:url(${font.file})format('woff2');}`,
                ''
              )}
            `}
          </style>
        </>
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
  fonts: [],
  initialColorMode: null,
  privateRouteRedirect: null,
  publicRouterRedirect: null,
};

export default AuikDocument;
