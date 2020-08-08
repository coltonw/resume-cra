import React from 'react';

interface EmbeddedImageProps {
  src: string;
  alt: string;
}

const EmbeddedImage: React.FC<EmbeddedImageProps> = ({ src, alt }) => {
  return <img src={src} className="border-2 border-gray-200 my-6" alt={alt} />;
};

export default EmbeddedImage;
