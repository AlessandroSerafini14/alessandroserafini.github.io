import styled from "styled-components";

import Image from "#components/Image";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.color.fgDefault};
  padding-top: ${({ theme }) => theme.spacing.s200};
  padding-bottom: ${({ theme }) => theme.spacing.s200};
  color: #fff;
`;

export const Logo = styled(Image)`
  margin-right: ${({ theme }) => theme.spacing.s300};
`;
