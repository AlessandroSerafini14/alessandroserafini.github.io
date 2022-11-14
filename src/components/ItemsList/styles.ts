import styled from "styled-components";

import { Chip as BaseChip } from "#components/Chip/styles";
import Text from "#components/Text";

import { MiddleAligned as BaseMiddleAligned } from "#styles";

export const Name = styled(Text)`
  flex: 1;

  a {
    font-weight: 600;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.s100};
  }

  svg {
    width: ${({ theme }) => theme.spacing.s200};
    height: ${({ theme }) => theme.spacing.s200};
  }

  svg,
  ${Name} {
    margin-right: ${({ theme }) => theme.spacing.s100};
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const Subtitle = styled(Text)`
  color: ${({ theme }) => theme.color.fgMuted};
  margin-left: ${({ theme }) => theme.spacing.s300};
`;

export const MiddleAligned = styled(BaseMiddleAligned)`
  flex: 1;
`;

export const Chip = styled(BaseChip)`
  margin-right: 0;
`;
