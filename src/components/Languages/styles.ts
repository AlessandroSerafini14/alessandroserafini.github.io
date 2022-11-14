import styled from 'styled-components'

export const LanguagesBar = styled.div`
  display: flex;
  border-radius: ${({ theme }) => theme.spacing.s500};
  margin-bottom: ${({ theme }) => theme.spacing.s200};
  overflow: hidden;
`

export const LanguageLine = styled.div<{ color: string; size: number }>`
  width: ${({ size }) => size}%;
  height: ${({ theme }) => theme.spacing.s100};
  background-color: ${({ color }) => color};

  &:not(:last-child) {
    box-shadow: inset -1px 0 0 0 #fff;
  }
`

export const List = styled.div``

export const Language = styled.div`
  display: inline-block;

  &:not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing.s200};
  }
`

export const Dot = styled.div<{ color: string }>`
  width: ${({ theme }) => theme.spacing.s100};
  height: ${({ theme }) => theme.spacing.s100};
  background-color: ${({ color }) => color};
  border-radius: 50%;
  margin-right: ${({ theme }) => theme.spacing.s100};
`
