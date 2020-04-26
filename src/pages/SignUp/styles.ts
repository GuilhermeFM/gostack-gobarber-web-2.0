import styled from 'styled-components';
import { shade } from 'polished';

import background from '../../assets/sign-up-background.png';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Content = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 10px;

  form {
    margin: 80px 0;
    min-width: 340px;
    text-align: center;
  }

  > a {
    display: flex;
    align-items: center;
    justify-content: center;

    color: #f4ede8;
    margin-top: 24px;
    text-decoration: none;

    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }

    svg {
      margin-right: 10px;
    }
  }
`;

export const Background = styled.div`
  flex: 2;

  background: url(${background}) no-repeat center;
  background-size: cover;
`;
