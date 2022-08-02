import React from 'react';

interface EmbeddedImageProps {
  src: string;
  alt: string;
}

const EmbeddedImage = ({ src, alt }: EmbeddedImageProps) => {
  return <img src={src} className="border-2 border-stone-200 my-6" alt={alt} />;
};

export default EmbeddedImage;
