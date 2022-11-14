import React from 'react'

import { Box as StyledBox, Header } from '#components/Box/styles'

type Props = {
  header: React.ReactNode
  children: React.ReactNode
}

const Box: React.FC<Props> = ({ header, children, ...restProps }) => {
  return (
    <StyledBox {...restProps}>
      <Header>{header}</Header>
      {children}
    </StyledBox>
  )
}

export default Box
