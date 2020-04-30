import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ErrorProps {
  isFocus: boolean;
  hasError?: boolean;
}

interface ContainerProps {
  isFocus: boolean;
  isFilled: boolean;
  hasError?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  background: #232139;
  border-radius: 10px;
  padding: 16px;
  border: 2px solid #232129;

  ${(props) =>
    props.hasError &&
    css`
      border-color: #c53030;
    `};

  ${(props) =>
    props.isFocus &&
    css`
      border-color: #ff9000;
    `};

  display: flex;
  align-items: center;
  color: #666360;

  & + div {
    margin-top: 10px;
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

  > svg {
    margin-right: 22px;

    ${(props) =>
      (props.isFocus || props.isFilled) &&
      css`
        color: #ff9000;
      `}
  }
`;

export const Error = styled(Tooltip)<ErrorProps>`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;

    ${(props) =>
      props.hasError &&
      css`
        color: #c53030;
      `};
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
