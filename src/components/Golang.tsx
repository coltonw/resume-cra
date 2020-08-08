import React from 'react';
import EmbeddedVideo from './EmbeddedVideo';
import GoVideo from '../media/godemo3.webm';

const Golang = () => {
  return (
    <>
      <div className="my-4">
        All of my side projects are partially rooted in learning something new.
        At the time, I was learning Go and so I wrote a few different voting
        algorithms in the Go playground. I started with{' '}
        <a
          href="https://en.wikipedia.org/wiki/Borda_count"
          className="text-gray-500 font-semibold hover:underline hover:text-gray-800"
        >
          Borda
        </a>
        , then went to{' '}
        <a
          href="https://en.wikipedia.org/wiki/Instant-runoff_voting"
          className="text-gray-500 font-semibold hover:underline hover:text-gray-800"
        >
          instant runoff (IRV)
        </a>{' '}
        and then eventually landed on a (highly questionable){' '}
        <a
          href="https://play.golang.org/p/KG0KlWWbNFc"
          className="text-gray-500 font-semibold hover:underline hover:text-gray-800"
        >
          blend of both
        </a>
        .
      </div>
      <EmbeddedVideo src={GoVideo} />
    </>
  );
};

export default Golang;
