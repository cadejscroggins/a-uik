import * as C from '@chakra-ui/react';
import React from 'react';

const PhoneInput = (props, ref) => (
  <C.InputGroup>
    <C.InputLeftAddon bg="gray.200">+1</C.InputLeftAddon>
    <C.Input ref={ref} placeholder="(012) 345-6789" type="tel" {...props} />
  </C.InputGroup>
);

export default PhoneInput;
