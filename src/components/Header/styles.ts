import { GoRepo } from "react-icons/go";
import { Link } from "react-scroll";
import styled from "styled-components";

import BaseOutlineButton from "#components/OutlineButton";

import { MiddleAligned } from "#styles";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.headerBg};
  padding: ${({ theme }) => theme.spacing.s200}
    ${({ theme }) => theme.spacing.s400} ${({ theme }) => theme.spacing.s100}
    ${({ theme }) => theme.spacing.s400};
  border-bottom: 1px solid ${({ theme }) => theme.color.headerBorder};
  margin-bottom: ${({ theme }) => theme.spacing.s400};
`;

export const Info = styled.div`
  /* Tablet and on */
  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Contacts = styled(MiddleAligned)`
  /* Mobile */
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-top: ${({ theme }) => theme.spacing.s200};
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.accentFg};
  font-weight: inherit;
  font-size: 20px;
  margin: 0 ${({ theme }) => theme.spacing.s100} 0 0;
  display: flex;
  align-items: center;

  span {
    color: initial;
  }
`;

export const GoRepoIcon = styled(GoRepo)`
  color: ${({ theme }) => theme.color.fgMuted};
  margin-right: ${({ theme }) => theme.spacing.s100};
`;

export const OutlineButton = styled(BaseOutlineButton)`
  margin-left: ${({ theme }) => theme.spacing.s100};
`;

export const NavLinks = styled.div`
  margin-top: ${({ theme }) => theme.spacing.s300};

  /* Desktop */
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    display: flex;
    gap: ${({ theme }) => theme.spacing.s100};
  }
`;

export const NavLink = styled(Link)`
  padding: ${({ theme }) => theme.spacing.s100}
    ${({ theme }) => theme.spacing.s100};
  color: ${({ theme }) => theme.color.fgDefault};
  border-radius: ${({ theme }) => theme.spacing.s100};
  position: relative;
  cursor: pointer;

  /* Desktop */
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    display: flex;
    align-items: center;

    &:first-child {
      &::after {
        content: "";
        width: 100%;
        height: 2px;
        background-color: ${({ theme }) => theme.color.primerBorderActive};
        position: absolute;
        bottom: -${({ theme }) => theme.spacing.s100};
        left: 0;
      }
    }
  }

  /* Up to Tabled */
  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    display: inline-block;
  }

  &:hover {
    color: ${({ theme }) => theme.color.fgDefault};
    background: ${({ theme }) => theme.color.actionListItemDefaultHoverBg};
    transition: background 0.12s ease-out;
  }

  svg {
    width: 20px;
    height: 20px;
    margin-right: ${({ theme }) => theme.spacing.s100};
    vertical-align: middle;
  }
`;
