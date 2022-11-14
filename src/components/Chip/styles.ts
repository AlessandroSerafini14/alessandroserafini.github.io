import styled, { css } from 'styled-components'

import { ChipType } from '#types'

export const Chip = styled.div<{ type: ChipType }>`
  display: inline-block;
  padding: 3px ${({ theme }) => theme.spacing.s100};
  margin-right: 5px;
  font-size: 12px;
  font-weight: 600;
  line-height: ${({ theme }) => theme.spacing.s200};
  white-space: nowrap;
  border-radius: 2em;
  border: 1px solid;

  ${({ type }) =>
    type === ChipType.PRIMARY &&
    css`
      color: ${({ theme }) => theme.color.accentFg};
      background-color: ${({ theme }) => theme.color.accentSubtle};
      border-color: ${({ theme }) => theme.color.accentSubtle};
    `}

  ${({ type }) =>
    type === ChipType.SECONDARY &&
    css`
      color: ${({ theme }) => theme.color.fgMuted};
      border-color: ${({ theme }) => theme.color.borderDefault};
    `}

  ${({ type }) =>
    type === ChipType.DEFAULT &&
    css`
      color: ${({ theme }) => theme.color.fgDefault};
      background-color: ${({ theme }) => theme.color.neutralMuted};
      border-color: ${({ theme }) => theme.color.counterBorder};
    `}

  ${({ type }) =>
    type === ChipType.SUCCESS &&
    css`
      color: ${({ theme }) => theme.color.successFg};
      border-color: ${({ theme }) => theme.color.successEmphasis};
    `}
`
