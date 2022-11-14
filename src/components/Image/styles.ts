import styled, { css } from "styled-components";

export const Image = styled.img<{ isCircle?: boolean }>`
  ${({ isCircle }) =>
    isCircle &&
    css`
      border-radius: 50%;
    `}
`;
