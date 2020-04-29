import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, registerField, defaultValue } = useField(name);

  const handleOnFocus = useCallback(() => {
    setIsFocus(true);
  }, []);

  const handleOnBlur = useCallback(() => {
    setIsFocus(false);
    setIsFilled(!!inputRef.current?.value);
  }, [inputRef]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isFocus={isFocus} isFilled={isFilled}>
      {Icon && <Icon size={20} />}
      <input
        defaultValue={defaultValue}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        ref={inputRef}
        {...rest}
      />
    </Container>
  );
};

export default Input;
