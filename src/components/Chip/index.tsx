import React from "react";

import { Chip as StyledChip } from "#components/Chip/styles";

import { ChipType } from "#types";

type Props = {
  type?: ChipType;
  children: string;
};

const Chip: React.FC<Props> = ({ type = ChipType.SECONDARY, children }) => {
  return <StyledChip type={type}>{children}</StyledChip>;
};

export default Chip;
