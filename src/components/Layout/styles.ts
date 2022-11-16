import { Element } from "react-scroll";
import styled, { css } from "styled-components";

import { Chip as BaseChip } from "#components/Chip/styles";

import { Layout as BaseLayout } from "#styles";

export const Layout = styled(BaseLayout)`
  padding-left: ${({ theme }) => theme.spacing.s400};
  padding-right: ${({ theme }) => theme.spacing.s400};

  /* Desktop */
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    display: grid;
    grid-auto-flow: column;
    grid-gap: ${({ theme }) => theme.size.layoutGutter};

    ${({ theme }) =>
      css`
        grid-template-columns:
          minmax(
            0,
            calc(100% - ${theme.size.sidebarWidth} - ${theme.size.layoutGutter})
          )
          0 auto;
      `}
  }
`;

export const Left = styled.main`
  /* Desktop */
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    grid-column: 1;
  }

  /* Mobile and Tablet */
  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    margin-bottom: ${({ theme }) => theme.spacing.s400};
  }
`;

export const Section = styled(Element)`
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.color.borderMuted};
    padding-bottom: ${({ theme }) => theme.spacing.s300};
    margin-bottom: ${({ theme }) => theme.spacing.s300};
  }
`;

export const Title = styled.h3`
  > * {
    margin-left: ${({ theme }) => theme.spacing.s100};
  }
`;

export const Chip = styled(BaseChip)`
  margin-right: 0;
`;

export const Right = styled.aside`
  grid-column: 2 / span 2;

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: ${({ theme }) => theme.size.sidebarWidth};
  }
`;
