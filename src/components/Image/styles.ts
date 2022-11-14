import styled, { css } from 'styled-components'

export const Image = styled.img<{ isCircle?: boolean; size: number }>`
  ${({ isCircle }) =>
    isCircle &&
    css`
      border-radius: 50%;
    `}

  ${({ size }) =>
    size &&
    css`
      width: ${size}px;
    `}
`
