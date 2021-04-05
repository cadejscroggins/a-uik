import React, { forwardRef } from 'react';
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';

const PhoneInput = (props, ref) => (
  <InputGroup>
    <InputLeftAddon bg="gray.100">+1</InputLeftAddon>
    <Input ref={ref} placeholder="(012) 345-6789" type="tel" {...props} />
  </InputGroup>
);

export default forwardRef(PhoneInput);
