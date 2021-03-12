import * as C from '@chakra-ui/react';
import InputMask from 'react-input-mask';
import React from 'react';

const PhoneInput = (props, ref) => (
  <C.InputGroup>
    <C.InputLeftAddon bg="gray.200">+1</C.InputLeftAddon>
    <C.Input
      ref={ref}
      alwaysShowMask={false}
      as={InputMask}
      formatChars={{ 0: '[0-9]' }}
      mask="(000) 000-0000"
      maskChar=" "
      placeholder="(012) 345-6789"
      type="tel"
      {...props}
    />
  </C.InputGroup>
);

export default PhoneInput;
