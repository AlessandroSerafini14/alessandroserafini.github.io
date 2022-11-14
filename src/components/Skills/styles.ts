import styled from "styled-components";

import { Chip as BaseChip } from "#components/Chip/styles";

export const Chip = styled(BaseChip)`
  margin-bottom: ${({ theme }) => theme.spacing.s100};
`;
