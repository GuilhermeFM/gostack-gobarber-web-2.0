import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocus: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  background: #232139;
  border-radius: 10px;
  padding: 16px;
  border: 2px solid ${(props) => (props.isFocus ? '#ff9000' : '#232129')};

  display: flex;
  align-items: center;
  color: #666360;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    color: #f4ede8;
    border: 0;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      transition-delay: 9999s;
      transition-property: background-color, color;
    }

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 22px;
    ${(props) =>
      (props.isFocus || props.isFilled) &&
      css`
        color: #ff9000;
      `}
  }
`;
