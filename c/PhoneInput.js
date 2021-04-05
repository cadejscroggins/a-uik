import React, { forwardRef } from 'react';
import * as C from '@chakra-ui/react';

const PhoneInput = (props, ref) => (
  <C.InputGroup>
    <C.InputLeftAddon bg="gray.100">+1</C.InputLeftAddon>
    <C.Input ref={ref} placeholder="(012) 345-6789" type="tel" {...props} />
  </C.InputGroup>
);

export default forwardRef(PhoneInput);
