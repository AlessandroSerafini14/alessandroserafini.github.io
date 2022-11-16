import styled, { css } from "styled-components";

import BaseBox from "#components/Box";
import { Header as BoxHeader } from "#components/Box/styles";
import Image from "#components/Image";

import { MiddleAligned } from "#styles";
export const Experiences = styled.div`
  margin-top: -1px;
`;

export const Row = styled.div`
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.color.borderMuted};

  &:hover {
    background-color: ${({ theme }) => theme.color.canvasSubtle};
  }
`;

export const Column = styled.div<{ isFolder?: boolean }>`
  padding: ${({ theme }) => theme.spacing.s100}
    ${({ theme }) => theme.spacing.s200};

  /* Desktop */
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 55%;
  }

  /* Tablet */
  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 50%;
  }

  &:first-child {
    /* Desktop */
    @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
      width: 30%;
    }

    /* Tablet */
    @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
      width: 30%;
    }

    /* Mobile */
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
      width: 75%;
    }
  }

  &:last-child {
    text-align: right;

    /* Desktop */
    @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
      width: 15%;
    }

    /* Tablet */
    @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
      width: 20%;
    }

    /* Mobile */
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
      width: 25%;
    }
  }

  &:not(:first-child) {
    color: ${({ theme }) => theme.color.fgMuted};
  }

  &:not(:last-child) {
    text-align: inherit;
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme, isFolder }) =>
      isFolder ? theme.color.iconDirectory : "inherit"};
    margin-right: ${({ theme }) => theme.spacing.s200};
  }
`;

export const ParentRow = styled(Row)`
  ${Column} {
    text-align: inherit;
    ${({ theme }) =>
      css`
        width: calc(100% - ${theme.spacing.s400});
      `};
  }

  a {
    &:hover {
      text-decoration: none !important;
    }
    display: block;
    width: 100%;
  }
`;

export const Box = styled(BaseBox)`
  margin-bottom: ${({ theme }) => theme.spacing.s200};

  ${BoxHeader} {
    background-color: ${({ theme }) => theme.color.canvasSubtle};
  }
`;

export const Header = styled(MiddleAligned)`
  > * {
    margin-right: ${({ theme }) => theme.spacing.s100};
  }
`;

export const Avatar = styled(Image)`
  margin-right: ${({ theme }) => theme.spacing.s100};
`;
