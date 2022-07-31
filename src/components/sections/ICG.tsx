import React from 'react';
import { FaAws, FaUnity } from 'react-icons/fa';
import SectionHeading from '../SectionHeading';
import SubHeading from '../SubHeading';
import SubHeadingTitle from '../SubHeadingTitle';
import Paragraph from '../Paragraph';
import Link from '../Link';
import EmbeddedVideo from '../EmbeddedVideo';
import IconLine from '../IconLine';
import IcgWebm from '../../media/icg.webm';
import IcgMp4 from '../../media/icg.mp4';
import { ReactComponent as ScalaJSLogo } from '../../media/scala-js-logo.svg';
import { ReactComponent as CSharpLogo } from '../../media/csharp-logo.svg';
import { ReactComponent as PythonLogo } from '../../media/python-logo.svg';
import { ReactComponent as ServerlessLogo } from '../../media/serverless-logo.svg';
import LineDate from '../LineDate';

const iconClassName = 'flex-none w-8 h-8 mx-2 text-stone-700 fill-current';

const ICG = () => (
  <>
    <SectionHeading>Instantaneous Card Game</SectionHeading>
    <SubHeading>
      <SubHeadingTitle>Scala.js</SubHeadingTitle>
      <IconLine>
        <LineDate>2018</LineDate>
        <ScalaJSLogo className={iconClassName} />
      </IconLine>
    </SubHeading>
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
    <SubHeading>
      <SubHeadingTitle>Unity</SubHeadingTitle>
      <IconLine>
        <LineDate>2019</LineDate>
        <FaUnity className={iconClassName} />
        <CSharpLogo className={iconClassName} />
        <PythonLogo className={iconClassName} />
        <FaAws className={iconClassName} />
        <ServerlessLogo className={iconClassName} />
      </IconLine>
    </SubHeading>
    <Paragraph>
      Over the holidays that year I discussed the idea with my brother and it
      was rekindled. Conveniently, I got a Humble Bundle with a bunch of card
      art assets for use in Unity, so I decided to build the game in Unity (
      <Link href="https://github.com/coltonw/instantaneous">
        backend source
      </Link>
      ; game not released).
    </Paragraph>
    <EmbeddedVideo webm={IcgWebm} mp4={IcgMp4} />
    <Paragraph>
      The game client was coded in C# and built with Unity. The backend was
      coded in Python deployed to AWS Lambda with the Serverless Framework.
    </Paragraph>
  </>
);

export default ICG;
