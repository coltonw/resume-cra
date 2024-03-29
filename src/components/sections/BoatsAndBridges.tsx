import React from 'react';
import SectionHeading from '../SectionHeading';
import Paragraph from '../Paragraph';
import Link from '../Link';
import EmbeddedVideo from '../EmbeddedVideo';
import BoatsAndBridgesWebm from '../../media/boatsandbridges.webm';
import BoatsAndBridgesMp4 from '../../media/boatsandbridges.mp4';
import BoatsAndBridgesLine from '../iconLines/BoatsAndBridgesLine';

const BoatsAndBridges = () => (
  <>
    <SectionHeading>Making a Real Game</SectionHeading>
    <BoatsAndBridgesLine />
    <Paragraph>
      In 2016, I made a couple modified{' '}
      <Link href="https://en.wikipedia.org/wiki/Hashiwokakero">
        hashi puzzles
      </Link>{' '}
      for my wife and friends to solve. I really enjoyed making the puzzles and
      thought maybe I could make a puzzle game similar to the{' '}
      <Link href="https://store.steampowered.com/app/304410/Hexcells_Infinite/">
        Hexcells series
      </Link>{' '}
      except instead of modified minesweeper I would do modified hashi.
    </Paragraph>
    <Paragraph>
      The idea evolved over time but eventually I started working on a level
      solver and accompanying level editor to build some puzzles. (
      <Link href="https://github.com/coltonw/boats-and-bridges/">
        level editor source
      </Link>
      ).
    </Paragraph>
    <EmbeddedVideo
      webm={BoatsAndBridgesWebm}
      mp4={BoatsAndBridgesMp4}
      width={1258}
      height={978}
    />
    <Paragraph>
      I spent a lot of time on a 3D Unity implementation of the game but every
      time I developed new visuals they would either not look how I wanted or
      they would obscure the gameplay elements to the point of being a net
      negative for the game. After spending a long time on a{' '}
      <Link href="http://kylehalladay.com/blog/tutorial/2017/02/21/Pencil-Sketch-Effect.html">
        pencil hatching shader
      </Link>{' '}
      and being disappointed with the results, I took an extended break from the
      project.
    </Paragraph>
    <Paragraph>
      Unlike most of my projects, this project was much more focused on
      execution rather than learning new technologies. The level solver was
      built in node with a heavy use of lodash for array manipulation. The level
      editor was just vanilla ES6 JavaScript using babel to transpile and
      webpack to bundle. I had a brief diversion where I learned Rust and
      started migrating the level editor to Rust for performance improvements.
    </Paragraph>
  </>
);

export default BoatsAndBridges;
