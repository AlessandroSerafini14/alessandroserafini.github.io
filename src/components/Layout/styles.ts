import { Element } from "react-scroll";
import styled, { css } from "styled-components";

import { Chip as BaseChip } from "#components/Chip/styles";

import { Layout as BaseLayout } from "#styles";

export const Layout = styled(BaseLayout)`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${({ theme }) => theme.size.layoutGutter};

  @media (min-width: ${({ theme }) =>
      theme.breakpoint.mobile} and max-width: ${({ theme }) =>
      theme.breakpoint.desktop}) {
    ${({ theme }) =>
      css`
        grid-template-columns:
          minmax(
            0,
            calc(
              100% - ${theme.size.sidebarWidthMobile} -
                ${theme.size.layoutGutter}
            )
          )
          0 auto;
      `}
  }

  @media (min-width: ${({ theme }) =>
      theme.breakpoint.tablet} and max-width: ${({ theme }) =>
      theme.breakpoint.desktop}) {
    ${({ theme }) =>
      css`
        grid-template-columns:
          minmax(
            0,
            calc(
              100% - ${theme.size.sidebarWidthTablet} -
                ${theme.size.layoutGutter}
            )
          )
          0 auto;
      `}
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    ${({ theme }) =>
      css`
        grid-template-columns:
          minmax(
            0,
            calc(
              100% - ${theme.size.sidebarWidthDesktop} -
                ${theme.size.layoutGutter}
            )
          )
          0 auto;
      `}
  }
`;

export const Left = styled.main`
  grid-column: 1;
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

  @media (min-width: ${({ theme }) =>
      theme.breakpoint.mobile} and max-width: ${({ theme }) =>
      theme.breakpoint.desktop}) {
    width: ${({ theme }) => theme.size.sidebarWidthMobile};
  }

  @media (min-width: ${({ theme }) =>
      theme.breakpoint.tablet} and max-width: ${({ theme }) =>
      theme.breakpoint.desktop}) {
    width: ${({ theme }) => theme.size.sidebarWidthTablet};
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: ${({ theme }) => theme.size.sidebarWidthDesktop};
  }
`;
