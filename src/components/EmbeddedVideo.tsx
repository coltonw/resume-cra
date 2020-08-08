import React, { useRef, useState, useEffect } from 'react';
import { FaRedoAlt } from 'react-icons/fa';

interface EmbeddedVideoProps {
  src: string;
}

const EmbeddedVideo: React.FC<EmbeddedVideoProps> = ({ src }) => {
  const videoRef: React.Ref<HTMLVideoElement> = useRef(null);
  const [playing, setPlaying] = useState(true);
  useEffect(() => {
    if (!videoRef.current) return;
    const videoElement = videoRef.current;
    videoRef.current.oncanplaythrough = (e) => {
      videoElement.play();
    };

    videoRef.current.onended = (e) => {
      setPlaying(false);
    };

    return () => {
      videoElement.oncanplaythrough = null;
      videoElement.onended = null;
    };
  }, [src]);
  return (
    <div className="relative my-6 border-2 border-gray-200">
      {playing || (
        <FaRedoAlt className="absolute inset-0 m-auto w-16 h-16 bg-gray-200 p-2 rounded-lg text-gray-800" />
      )}
      <video
        src={src}
        ref={videoRef}
        playsInline
        onClick={() => {
          if (!playing && videoRef.current) {
            setPlaying(true);
            videoRef.current.play();
          }
        }}
      />
    </div>
  );
};

export default EmbeddedVideo;
