import * as C from '@chakra-ui/react';
import React from 'react';

const BaseFormErrorMessage = ({ formError, ...rest }) => (
  <C.FormControl isInvalid={formError}>
    <C.FormErrorMessage
      display="block"
      mt={8}
      pos="relative"
      textAlign="center"
      {...rest}
    >
      {formError?.message}
    </C.FormErrorMessage>
  </C.FormControl>
);

export default BaseFormErrorMessage;
