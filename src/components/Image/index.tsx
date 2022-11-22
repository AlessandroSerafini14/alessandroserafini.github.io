import React from "react";

import { StyledImage } from "#components/Image/styles";
type Props = {
  src: string;
  alt: string;
  width: number;
  height?: number;
  isCircle?: boolean;
};

const Image: React.FC<Props> = ({
  src,
  isCircle,
  alt,
  width,
  height = width,
  ...restProps
}) => {
  return (
    <StyledImage
      src={src}
      isCircle={isCircle}
      width={width}
      height={height}
      alt={alt}
      {...restProps}
    />
  );
};

export default Image;
