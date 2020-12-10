import GoogleFonts from 'next-google-fonts';
import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';

const AuikContent = ({ children, fonts, seo, theme }) => (
  <ChakraProvider resetCSS theme={extendTheme(theme)}>
    {fonts && <GoogleFonts href={fonts} />}
    <DefaultSeo {...seo} />
    {children}
  </ChakraProvider>
);

AuikContent.defaultProps = {
  children: null,
  fonts: null,
  seo: {},
  theme: {},
};

export default AuikContent;
