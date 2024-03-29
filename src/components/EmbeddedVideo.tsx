import React, { useRef, useState, useEffect } from 'react';
import { FaRedoAlt } from 'react-icons/fa';
import throttle from 'lodash.throttle';

interface EmbeddedVideoProps {
  webm: string;
  mp4: string;
  // TODO: make not optional
  width?: number;
  height?: number;
}

// Code modified from https://github.com/fkhadra/react-on-screen
const checkIsVisible = (
  {
    top,
    bottom,
    height,
  }: {
    top: number;
    bottom: number;
    height: number;
  },
  windowHeight: number
) => {
  if (top + bottom === 0) {
    return false;
  }

  const topThreshold = 0;
  const heightCheck = windowHeight;

  return height > heightCheck
    ? top + height >= topThreshold && bottom - height <= heightCheck
    : top >= topThreshold && bottom <= heightCheck;
};

const isVideoVisible = (
  nodeRef: HTMLElement | null,
  setIsVisible: (isVis: boolean) => void
) => {
  setTimeout(() => {
    // isComponentVisible might be called from componentDidMount, before component ref is assigned
    if (!nodeRef) return;

    const html = document.documentElement;
    const boundingClientRect = nodeRef.getBoundingClientRect();
    const windowHeight = window.innerHeight || html.clientHeight;

    const isVisible = checkIsVisible(boundingClientRect, windowHeight);
    setIsVisible(isVisible);
  }, 0);
};

// target width for media is 748 because that is the width they will be on a computer monitor
const EmbeddedVideo = ({ webm, mp4, width, height }: EmbeddedVideoProps) => {
  const videoRef: React.Ref<HTMLVideoElement> = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(false);
  const [canPlay, setCanPlay] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const videoNode = videoRef.current;
    const throttledIsVideoVisible = throttle(
      () => isVideoVisible(videoNode, setIsVisible),
      250
    );
    window.addEventListener('scroll', throttledIsVideoVisible);
    window.addEventListener('resize', throttledIsVideoVisible);

    return () => {
      window.removeEventListener('scroll', throttledIsVideoVisible);
      window.removeEventListener('resize', throttledIsVideoVisible);
    };
  }, []);
  useEffect(() => {
    if (!videoRef.current) return;
    const videoElement = videoRef.current;
    videoRef.current.oncanplaythrough = (e) => {
      setCanPlay(true);
    };

    videoRef.current.onended = (e) => {
      setPlaying(false);
    };

    return () => {
      videoElement.oncanplaythrough = null;
      videoElement.onended = null;
    };
  }, [webm, setCanPlay, setPlaying]);
  useEffect(() => {
    if (isVisible && canPlay && videoRef.current && !played) {
      videoRef.current.play();
      setPlaying(true);
      setPlayed(true);
    }
  }, [isVisible, canPlay, played, setPlaying, setPlayed]);

  // Note: in my brief experimentation, aspectRatio on the parent did a better job preventing layout shift than anything I could do on the video itself
  return (
    <div
      className="relative my-6 border-2 border-stone-200"
      style={{
        aspectRatio:
          width && height ? `${width + 4} / ${height + 4}` : undefined,
      }}
    >
      {!playing && played && (
        <FaRedoAlt className="absolute inset-0 m-auto w-16 h-16 bg-stone-100 p-2 rounded-lg text-stone-800 cursor-pointer" />
      )}
      <video
        ref={videoRef}
        playsInline
        muted
        onClick={() => {
          if (!playing && videoRef.current) {
            setPlaying(true);
            videoRef.current.play();
          }
        }}
        width={width}
        height={height}
      >
        <source type="video/webm" src={webm} />
        <source type="video/mp4" src={mp4} />
      </video>
    </div>
  );
};

export default EmbeddedVideo;
