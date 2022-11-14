import React from 'react'

import { OutlineButton as StyledOutlineButton } from '#components/OutlineButton/styles'

import { ButtonSize } from '#types'
type Props = {
  onClick: () => void
  children: string
  icon?: JSX.Element
  size?: ButtonSize
}

const OutlineButton: React.FC<Props> = ({ children, icon, size = ButtonSize.SMALL, onClick, ...restProps }) => {
  return (
    <StyledOutlineButton onClick={onClick} size={size} {...restProps}>
      {icon}
      {children}
    </StyledOutlineButton>
  )
}

export default OutlineButton
