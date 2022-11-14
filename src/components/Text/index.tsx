import React from "react";

import { Text as StyledText } from "#components/Text/styles";

import { TextSize } from "#types";

type Props = {
  children: React.ReactNode;
  size?: TextSize;
};

const Text: React.FC<Props> = ({ size, children, ...restProps }) => {
  return (
    <StyledText size={size} {...restProps}>
      {children}
    </StyledText>
  );
};

export default Text;
