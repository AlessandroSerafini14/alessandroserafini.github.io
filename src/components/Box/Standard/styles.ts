import styled from "styled-components";

import { MiddleAligned } from "#styles";

export const Header = styled(MiddleAligned)`
  svg {
    margin-right: ${({ theme }) => theme.spacing.s100};
  }
`;
export const BoxContent = styled.div`
  padding: ${({ theme }) => theme.spacing.s200}
    ${({ theme }) => theme.spacing.s400} ${({ theme }) => theme.spacing.s400}
    ${({ theme }) => theme.spacing.s400};
  font-size: 16px;
`;
