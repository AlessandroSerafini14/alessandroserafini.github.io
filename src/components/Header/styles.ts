import { GoRepo } from 'react-icons/go'
import { Link } from 'react-scroll'
import styled from 'styled-components'

import BaseOutlineButton from '#components/OutlineButton'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.headerBg};
  padding: ${({ theme }) => theme.spacing.s200} ${({ theme }) => theme.spacing.s400} ${({ theme }) => theme.spacing.s100}
    ${({ theme }) => theme.spacing.s400};
  border-bottom: 1px solid ${({ theme }) => theme.color.headerBorder};
  margin-bottom: ${({ theme }) => theme.spacing.s400};
`

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
`

export const GoRepoIcon = styled(GoRepo)`
  color: ${({ theme }) => theme.color.fgMuted};
  margin-right: ${({ theme }) => theme.spacing.s100};
`

export const OutlineButton = styled(BaseOutlineButton)`
  margin-left: ${({ theme }) => theme.spacing.s100};
`

export const NavLinks = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing.s300};
  gap: ${({ theme }) => theme.spacing.s100};
`

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.s100} ${({ theme }) => theme.spacing.s100};
  color: ${({ theme }) => theme.color.fgDefault};
  border-radius: ${({ theme }) => theme.spacing.s100};
  position: relative;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.fgDefault};
    background: ${({ theme }) => theme.color.actionListItemDefaultHoverBg};
    transition: background 0.12s ease-out;
  }

  &:first-child {
    &::after {
      content: '';
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) => theme.color.primerBorderActive};
      position: absolute;
      bottom: -${({ theme }) => theme.spacing.s100};
      left: 0;
    }
  }

  svg {
    width: 20px;
    height: 20px;
    margin-right: ${({ theme }) => theme.spacing.s100};
  }
`
