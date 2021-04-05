import * as C from '@chakra-ui/react';
import React from 'react';

const BaseFormErrorMessage = ({ formError }) => (
  <C.FormControl isInvalid={formError}>
    <C.FormErrorMessage
      display="block"
      mt={8}
      pos="relative"
      textAlign="center"
    >
      {formError?.message}
    </C.FormErrorMessage>
  </C.FormControl>
);

export default BaseFormErrorMessage;
