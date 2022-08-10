import React from 'react';
import Paragraph from '../Paragraph';
import Link from '../Link';
import EmbeddedVideo from '../EmbeddedVideo';
import GoWebm from '../../media/godemo.webm';
import GoMp4 from '../../media/godemo.mp4';
import GolangLine from '../iconLines/GolangLine';

const Golang = () => {
  return (
    <>
      <GolangLine />
      <Paragraph>
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
      </Paragraph>
      <EmbeddedVideo webm={GoWebm} mp4={GoMp4} width={748} height={450} />
    </>
  );
};

export default Golang;
