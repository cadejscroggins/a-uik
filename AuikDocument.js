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
}) => {
  const stringifiedIsPrivateRoute = JSON.stringify(isPrivateRoute);
  const stringifiedIsPublicRoute = JSON.stringify(isPublicRoute);
  const prr = `${privateRouteRedirect}?redirect=${page}`;
  const stringifiedPrivateRouteRedirect = JSON.stringify(prr);
  const stringifiedPublicRouteRedirect = JSON.stringify(publicRouteRedirect);

  return (
    <Html>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(()=>{const iid=localStorage.getItem("CognitoIdentityServiceProvider.${process.env.authUserPoolWebClientId}.LastAuthUser");if(${stringifiedPublicRouteRedirect}&&${stringifiedIsPublicRoute}&&iid){window.location.href=${stringifiedPublicRouteRedirect};}if(${stringifiedPrivateRouteRedirect}&&${stringifiedIsPrivateRoute}&&!iid){window.location.href=${stringifiedPrivateRouteRedirect};}})();`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default AuikDocument;
