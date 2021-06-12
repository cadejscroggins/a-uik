import PlausibleProvider from 'next-plausible';
import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';

const AuikContent = ({ analytics, children, seo, theme }) => {
  const { asPath } = useRouter();

  return (
    <PlausibleProvider {...analytics}>
      <ChakraProvider resetCSS theme={extendTheme(theme)}>
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
  seo: {},
  theme: {},
};

export default AuikContent;
