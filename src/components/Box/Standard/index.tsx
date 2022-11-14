import React from 'react'
import { AiOutlineUnorderedList } from 'react-icons/ai'

import Box from '#components/Box'
import { Header, BoxContent } from '#components/Box/Standard/styles'

type Props = {
  children: React.ReactNode
}

const StandardBox: React.FC<Props> = ({ children }) => {
  const BoxHeader = () => (
    <Header>
      <AiOutlineUnorderedList />
      <strong>README.md</strong>
    </Header>
  )

  return (
    <Box header={<BoxHeader />}>
      <BoxContent>{children}</BoxContent>
    </Box>
  )
}

export default StandardBox
