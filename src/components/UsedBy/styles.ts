import styled from 'styled-components'

import { Image as BaseImage } from '#components/Image/styles'

export const Image = styled(BaseImage)`
  margin-right: ${({ theme }) => theme.spacing.s100};
`
