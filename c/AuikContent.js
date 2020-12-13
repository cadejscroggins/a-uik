import GoogleFonts from 'next-google-fonts';
import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';

const AuikContent = ({ children, fonts, seo, theme }) => {
  const router = useRouter();

  return (
    <ChakraProvider resetCSS theme={extendTheme(theme)}>
      {fonts && <GoogleFonts href={fonts} />}
      <DefaultSeo
        titleTemplate={router.asPath === '/' ? undefined : seo.titleTemplate}
        {...seo}
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
