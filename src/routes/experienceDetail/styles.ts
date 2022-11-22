import styled from "styled-components";

import { StyledImage } from "#components/Image/styles";

import { MiddleAligned as BaseMiddleAligned } from "#styles";

export const MiddleAligned = styled(BaseMiddleAligned)`
  margin-bottom: ${({ theme }) => theme.spacing.s200};

  h1 {
    margin-bottom: 0;
  }

  ${StyledImage} {
    margin-right: ${({ theme }) => theme.spacing.s100};
  }
`;
