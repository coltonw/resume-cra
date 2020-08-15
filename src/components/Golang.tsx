import React from 'react';
import { DiGo } from 'react-icons/di';
import Link from './Link';
import EmbeddedVideo from './EmbeddedVideo';
import GoVideo from '../media/godemo3.webm';

const Golang = () => {
  return (
    <>
      <div className="my-4">
        All of my side projects are partially rooted in learning something new.
        At the time, I was learning Go and so I wrote a few different voting
        algorithms in the Go playground. I started with{' '}
        <Link href="https://en.wikipedia.org/wiki/Borda_count">Borda</Link>,
        then went to{' '}
        <Link href="https://en.wikipedia.org/wiki/Instant-runoff_voting">
          instant runoff (IRV)
        </Link>{' '}
        and then eventually landed on a (highly questionable){' '}
        <Link href="https://play.golang.org/p/KG0KlWWbNFc">blend of both</Link>.
      </div>
      <EmbeddedVideo src={GoVideo} />
      <div className="w-full flex flex-row items-center mb-12">
        <div className="flex-1 border-t-2 border-gray-200" />
        <DiGo className="flex-none block w-8 h-8 mx-4" />
        <div className="flex-1 border-t-2 border-gray-200" />
      </div>
    </>
  );
};

export default Golang;
