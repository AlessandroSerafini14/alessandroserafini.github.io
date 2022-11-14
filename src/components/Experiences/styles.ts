import styled from "styled-components";

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

  &:not(:first-child) {
    color: ${({ theme }) => theme.color.fgMuted};
  }

  &:last-child {
    width: 10%;
    text-align: right;
  }

  &:first-child {
    width: 30%;
    text-align: inherit;
  }

  &:nth-child(2) {
    width: 60%;
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
    width: 100%;
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
