import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #232139;
  border-radius: 10px;
  padding: 16px;
  border: 2px solid #232129;

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
  }
`;
