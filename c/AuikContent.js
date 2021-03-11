import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import { Global } from '@emotion/react';
import { GoogleFonts } from 'next-google-fonts';
import { useRouter } from 'next/router';
import 'focus-visible/dist/focus-visible';

const AuikContent = ({ children, fonts, seo, theme }) => {
  const { asPath } = useRouter();

  return (
    <ChakraProvider resetCSS theme={extendTheme(theme)}>
      <Global
        styles={{
          '.js-focus-visible :focus:not([data-focus-visible-added])': {
            boxShadow: 'none',
            outline: 'none',
          },
        }}
      />
      {fonts && <GoogleFonts href={fonts} />}
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
  );
};

AuikContent.defaultProps = {
  children: null,
  fonts: null,
  seo: {},
  theme: {},
};

export default AuikContent;
