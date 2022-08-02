import React from 'react';
import SectionHeading from '../SectionHeading';
import RevonarchyLine from '../iconLines/RevonarchyLine';
import Paragraph from '../Paragraph';
import Link from '../Link';
import EmbeddedVideo from '../EmbeddedVideo';
import RevonarchyWebm from '../../media/revonarchy.webm';
import RevonarchyMp4 from '../../media/revonarchy.mp4';

const Revonarchy = () => {
  return (
    <>
      <SectionHeading>No More Voting!</SectionHeading>
      <RevonarchyLine />
      <Paragraph>
        I got tired of my favorite games never getting picked, so I decided to
        move away from voting to let people just pick a game and then rotate who
        picks the game each time. The problem that quickly showed up was that
        some people would only show up rarely and yet got to pick just as often,
        Thus Revonarchy was born. (
        <Link href="https://github.com/coltonw/revonarchy">Source</Link>; site
        was never deployed)
      </Paragraph>
      <EmbeddedVideo webm={RevonarchyWebm} mp4={RevonarchyMp4} />
      <Paragraph>
        Revonarchy was relatively short lived but I still learned some great
        stuff including Bower, Koa, Less, Gulp, Ramda, and most importantly
        React.
      </Paragraph>
    </>
  );
};

export default Revonarchy;
