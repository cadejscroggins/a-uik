import PlausibleProvider from 'next-plausible';
import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import { Global } from '@emotion/react';
import { useRouter } from 'next/router';
import 'focus-visible/dist/focus-visible';

const AuikContent = ({ analytics, children, seo, theme }) => {
  const { asPath } = useRouter();

  return (
    <PlausibleProvider {...analytics}>
      <ChakraProvider resetCSS theme={extendTheme(theme)}>
        <Global
          styles={`
          .js-focus-visible :focus:not([data-focus-visible-added]) {
            box-shadow: none;
            outline: none;
          },
        `}
        />
        <DefaultSeo
          {...seo}
          titleTemplate={
            (seo.titleTemplateDisabled || []).includes(asPath)
              ? '%s'
              : seo.titleTemplate
          }
        />
        {children}
      </ChakraProvider>
    </PlausibleProvider>
  );
};

AuikContent.defaultProps = {
  analytics: {},
  children: null,
  fonts: null,
  seo: {},
  styles: '',
  theme: {},
};

export default AuikContent;
