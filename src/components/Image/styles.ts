import Image from "next/image";
import styled, { css } from "styled-components";

export const StyledImage = styled(Image)<{ isCircle?: boolean }>`
  ${({ isCircle }) =>
    isCircle &&
    css`
      border-radius: 50%;
    `}
`;
