import React from 'react';

interface EmbeddedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// target width for media is 748 because that is the width they will be on a computer monitor
const EmbeddedImage = ({ src, alt, width, height }: EmbeddedImageProps) => {
  return (
    <img
      src={src}
      className="border-2 border-stone-200 my-6"
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default EmbeddedImage;
