import styled from "styled-components";

import { ButtonSize } from "#types";

export const OutlineButton = styled.button<{ size: ButtonSize }>`
  display: flex;
  align-items: center;
  padding: ${({ size, theme }) =>
    (size === ButtonSize.SMALL && "3px 12px") ||
    (size === ButtonSize.MEDIUM &&
      `${theme.spacing.s100} ${theme.spacing.s200}`)};

  line-height: 20px;
  cursor: pointer;
  border: 1px solid;
  border-radius: ${({ theme }) => theme.spacing.s100};
  color: ${({ theme }) => theme.color.btnText};
  background-color: ${({ theme }) => theme.color.btnBg};
  border-color: ${({ theme }) => theme.color.btnBorder};
  box-shadow: ${({ theme }) => theme.color.btnShadow},
    ${({ theme }) => theme.color.btnInsetShadow};
  transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
  transition-property: color, background-color, box-shadow, border-color;

  svg {
    color: ${({ theme }) => theme.color.fgMuted};
    width: ${({ theme }) => theme.spacing.s200};
    height: ${({ theme }) => theme.spacing.s200};
    margin-right: ${({ theme }) => theme.spacing.s100};
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.btnHoverBg};
    border-color: ${({ theme }) => theme.color.btnHoverBorder};
    transition-duration: 0.1s;
  }
`;
