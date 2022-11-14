import styled, { css } from 'styled-components'

import { TextSize } from '#types'

const common = (size?: TextSize) => css`
  font-size: ${(size === TextSize.SMALL && '12px') || (size === TextSize.LARGE && '16px') || '14px'};
`

export const Text = styled.span<{ size?: TextSize }>`
  ${({ size }) => common(size)};
`
