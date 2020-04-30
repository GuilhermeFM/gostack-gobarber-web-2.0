import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 180px;
    background: #ff9900;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;

    color: #312e31;

    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s;

    position: absolute;
    bottom: calc(100% + 8px);

    /* centers the box */
    left: 50%;
    transform: translateX(-50%);

    &::before {
      content: '';

      position: absolute;
      top: 100%;

      /* make a arrow bellow the box */
      border-style: solid;
      border-color: #ff9900 transparent;
      border-width: 6px 6px 0 6px;

      /* center arrow */
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
