import React, { forwardRef, useState } from 'react';
import { Eye, EyeOff } from 'react-feather';
import {
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Tooltip,
} from '@chakra-ui/react';

const PasswordInput = (props, ref) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const text = passwordVisible ? 'Hide password' : 'Show password';

  return (
    <InputGroup>
      <Input
        ref={ref}
        type={passwordVisible ? 'text' : 'password'}
        {...props}
      />
      <InputRightElement>
        <Tooltip
          fontSize={1}
          hasArrow
          label={text}
          offset={[0, -4]}
          placement="top"
        >
          <IconButton
            aria-label={text}
            borderBottomLeftRadius={0}
            borderTopLeftRadius={0}
            colorScheme="gray"
            icon={passwordVisible ? <Icon as={EyeOff} /> : <Icon as={Eye} />}
            onClick={() => setPasswordVisible(!passwordVisible)}
            sx={{
              '&:hover': { bg: 'transparent', opacity: '1' },
              opacity: '0.8',
            }}
            variant="ghost"
          />
        </Tooltip>
      </InputRightElement>
    </InputGroup>
  );
};

export default forwardRef(PasswordInput);
