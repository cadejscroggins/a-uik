import * as C from '@chakra-ui/react';
import React, { forwardRef, useState } from 'react';
import { Eye, EyeOff } from 'react-feather';

const PasswordInput = (props, ref) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const text = passwordVisible ? 'Hide password' : 'Show password';

  return (
    <C.InputGroup>
      <C.Input
        ref={ref}
        type={passwordVisible ? 'text' : 'password'}
        {...props}
      />
      <C.InputRightElement>
        <C.Tooltip
          fontSize={1}
          hasArrow
          label={text}
          offset={[0, -4]}
          placement="top"
        >
          <C.IconButton
            aria-label={text}
            borderBottomLeftRadius={0}
            borderTopLeftRadius={0}
            colorScheme="gray"
            icon={
              passwordVisible ? <C.Icon as={EyeOff} /> : <C.Icon as={Eye} />
            }
            onClick={() => setPasswordVisible(!passwordVisible)}
            sx={{
              '&:hover': { bg: 'transparent', opacity: '1' },
              opacity: '0.8',
            }}
            variant="ghost"
          />
        </C.Tooltip>
      </C.InputRightElement>
    </C.InputGroup>
  );
};

export default forwardRef(PasswordInput);
