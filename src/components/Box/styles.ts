import styled from 'styled-components'

export const Box = styled.div`
  background-color: ${({ theme }) => theme.color.canvasDefault};
  border-color: ${({ theme }) => theme.color.borderDefault};
  border-style: solid;
  border-width: 1px;
  border-radius: ${({ theme }) => theme.spacing.s100};

  h2 {
    margin-top: ${({ theme }) => theme.spacing.s300};
  }
`

export const Header = styled.header`
  padding: ${({ theme }) => theme.spacing.s200};
  border-top-left-radius: ${({ theme }) => theme.spacing.s100};
  border-top-right-radius: ${({ theme }) => theme.spacing.s100};
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.borderDefault};

  > div {
    margin-right: ${({ theme }) => theme.spacing.s100};
  }
`
