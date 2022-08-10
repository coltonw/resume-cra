import React from 'react';
import SectionHeading from '../SectionHeading';
import Paragraph from '../Paragraph';
import Link from '../Link';
import EmbeddedVideo from '../EmbeddedVideo';
import IcgScalaJsLine from '../iconLines/IcgScalaJsLine';
import IcgUnityLine from '../iconLines/IcgUnityLine';
import IcgWebm from '../../media/icg.webm';
import IcgMp4 from '../../media/icg.mp4';

const ICG = () => (
  <>
    <SectionHeading>Instantaneous Card Game</SectionHeading>
    <IcgScalaJsLine />
    <Paragraph>
      I love card games. I could write about that topic alone forever but
      suffice it to say, I had an idea for a collectible card game where you
      build the deck and then the game plays itself where the winner is whoever
      had the better deck.
    </Paragraph>
    <Paragraph>
      I made an early prototype in Scala.js (
      <Link href="https://github.com/coltonw/deckBuilder">source</Link>;{' '}
      <Link href="http://scalajs.willcolton.com/">site</Link>). I stopped mostly
      because the Scala.js ecosystem was incredibly barren with lackluster
      tooling and few tutorials which were all broken and out of date.
    </Paragraph>
    <IcgUnityLine />
    <Paragraph>
      Over the holidays that year I discussed the idea with my brother and it
      was rekindled. Conveniently, I got a Humble Bundle with a bunch of card
      art assets for use in Unity, so I decided to build the game in Unity (
      <Link href="https://github.com/coltonw/instantaneous">
        backend source
      </Link>
      ; game not released).
    </Paragraph>
    <EmbeddedVideo webm={IcgWebm} mp4={IcgMp4} width={960} height={600} />
    <Paragraph>
      The game client was coded in C# and built with Unity. The backend was
      coded in Python deployed to AWS Lambda with the Serverless Framework.
    </Paragraph>
  </>
);

export default ICG;
