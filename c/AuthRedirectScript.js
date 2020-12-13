/* eslint-disable react/no-danger */

import React from 'react';

const AuthRedirectScript = ({
  isPrivateRoute,
  isPublicRoute,
  page,
  privateRouteRedirect,
  publicRouteRedirect,
}) => {
  const stringifiedIsPrivateRoute = JSON.stringify(isPrivateRoute);
  const stringifiedIsPublicRoute = JSON.stringify(isPublicRoute);
  const prr = `${privateRouteRedirect}?redirect=${page}`;
  const stringifiedPrivateRouteRedirect = JSON.stringify(prr);
  const stringifiedPublicRouteRedirect = JSON.stringify(publicRouteRedirect);

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(()=>{const iid=localStorage.getItem("CognitoIdentityServiceProvider.${process.env.authUserPoolWebClientId}.LastAuthUser");if(${stringifiedPublicRouteRedirect}&&${stringifiedIsPublicRoute}&&iid){window.location.href=${stringifiedPublicRouteRedirect};}if(${stringifiedPrivateRouteRedirect}&&${stringifiedIsPrivateRoute}&&!iid){window.location.href=${stringifiedPrivateRouteRedirect};}})();`,
      }}
    />
  );
};

export default AuthRedirectScript;
