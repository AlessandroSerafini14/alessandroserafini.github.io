import styled from "styled-components";

import { Image } from "#components/Image/styles";

import { MiddleAligned as BaseMiddleAligned } from "#styles";

export const MiddleAligned = styled(BaseMiddleAligned)`
  margin-bottom: ${({ theme }) => theme.spacing.s200};

  h1 {
    margin-bottom: 0;
  }

  ${Image} {
    margin-right: ${({ theme }) => theme.spacing.s100};
  }
`;
