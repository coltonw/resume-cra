import React from 'react';

interface EmbeddedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

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
