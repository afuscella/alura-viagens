import React from 'react';
import { InputWrapper, InputBase } from '../Input';

export interface IHandleInputChangeEvent {
  target: {
    // eslint-disable-next-line no-unused-vars
    getAttribute: (name: string) => string;
    value: string;
  };
}

interface ITextField {
  placeholder?: string;
  name: string;
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: IHandleInputChangeEvent) => void;
}

export function TextField({
  placeholder, name, value, onChange, ...props
}: ITextField) {
  return (
    <InputWrapper>
      <InputBase
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        role="textbox"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </InputWrapper>
  );
}

TextField.defaultProps = {
  placeholder: '',
};
