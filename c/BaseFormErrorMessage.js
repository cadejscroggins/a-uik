import React from 'react';
import { FormControl, FormErrorMessage } from '@chakra-ui/react';

const BaseFormErrorMessage = ({ formError }) => (
  <FormControl isInvalid={formError}>
    <FormErrorMessage display="block" mt={8} pos="relative" textAlign="center">
      {formError?.message}
    </FormErrorMessage>
  </FormControl>
);

export default BaseFormErrorMessage;
