/* eslint-disable react/no-danger */

import React from 'react';

const AuthRedirectScript = ({
  isPrivateRoute,
  isPublicRoute,
  privateRouteRedirect,
  publicRouteRedirect,
}) => {
  const stringifiedIsPrivateRoute = JSON.stringify(isPrivateRoute);
  const stringifiedIsPublicRoute = JSON.stringify(isPublicRoute);
  const stringifiedPublicRouteRedirect = JSON.stringify(publicRouteRedirect);

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(()=>{const iid=localStorage.getItem("CognitoIdentityServiceProvider.${process.env.authUserPoolWebClientId}.LastAuthUser");if(${stringifiedPublicRouteRedirect}&&${stringifiedIsPublicRoute}&&iid){window.location.href=${stringifiedPublicRouteRedirect};}if(${stringifiedIsPrivateRoute}&&!iid){window.location.href="${privateRouteRedirect}?redirect="+encodeURIComponent(window.location.pathname+window.location.search);}})();`,
      }}
    />
  );
};

export default AuthRedirectScript;
