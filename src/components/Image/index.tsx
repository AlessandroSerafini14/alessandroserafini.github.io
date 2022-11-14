import React from "react";

import { Image as StyledImage } from "#components/Image/styles";
type Props = {
  src: string;
  isCircle?: boolean;
  size?: number;
};

const Image: React.FC<Props> = ({ src, isCircle, size, ...restProps }) => {
  return (
    <StyledImage
      src={src}
      isCircle={isCircle}
      style={{ width: size }}
      {...restProps}
    />
  );
};

export default Image;
