import React from 'react';
import { DiGo } from 'react-icons/di';
import Link from '../Link';
import EmbeddedVideo from '../EmbeddedVideo';
import IconLine from '../IconLine';
import GoWebm from '../../media/godemo3.webm';
import GoMp4 from '../../media/godemo3.mp4';

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
      <EmbeddedVideo webm={GoWebm} mp4={GoMp4} />
      <IconLine>
        <DiGo className="flex-none block w-8 h-8 mx-4" />
      </IconLine>
    </>
  );
};

export default Golang;
