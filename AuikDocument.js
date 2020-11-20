import React from 'react';
import { Head, Html, Main, NextScript } from 'next/document';

const AuikDocument = ({
  __NEXT_DATA__: {
    page,
    props: {
      pageProps: { isPrivateRoute = false, isPublicRoute = false },
    },
  },
  privateRouteRedirect,
  publicRouteRedirect,
}) => (
  <Html>
    <Head>
      <script
        dangerouslySetInnerHTML={{
          __html: `(()=>{const iid=localStorage.getItem("CognitoIdentityServiceProvider.${process.env.authUserPoolWebClientId}.LastAuthUser");${publicRouteRedirect}&&${isPublicRoute}&&iid&&(window.location.href="${publicRouteRedirect}"),${privateRouteRedirect}&&${isPrivateRoute}&&!iid&&(window.location.href="${privateRouteRedirect}?redirect=${page}")})();`,
        }}
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default AuikDocument;
