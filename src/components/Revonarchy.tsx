import React from 'react';
import { DiBower, DiGulp, DiReact } from 'react-icons/di';
import { FaLess } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import Link from './Link';
import EmbeddedVideo from './EmbeddedVideo';
import IconLine from './IconLine';
import RevonarchyWebm from '../media/revonarchy.webm';
import RevonarchyMp4 from '../media/revonarchy.mp4';
import { ReactComponent as RamdaLogo } from '../media/ramda-logo.svg';

const iconClassName = 'flex-none w-8 h-8 mx-2 text-gray-800 fill-current';

const Revonarchy = () => {
  return (
    <>
      <SectionHeading>No more voting!</SectionHeading>
      <div className="my-4">
        I got tired of my favorite games never getting picked, so I decided to
        move away from voting to let people just pick a game and then rotate who
        picks the game each time. The problem that quickly showed up was that
        some people would only show up rarely and yet got to pick just as often,
        Thus Revonarchy was born. (
        <Link href="https://github.com/coltonw/revonarchy">Source</Link>; site
        was never deployed)
      </div>
      <EmbeddedVideo webm={RevonarchyWebm} mp4={RevonarchyMp4} />
      <div className="my-4">
        Revonarchy was relatively short lived but I still learned some great
        stuff including Bower, Koa, Less, Gulp, Ramda, and most importantly
        React.
      </div>
      <IconLine>
        <DiBower className={iconClassName} />
        <div
          className="flex-none mx-2 text-gray-800"
          style={{
            fontFamily: 'italiana,sans-serif',
          }}
        >
          koa
        </div>
        <FaLess className={iconClassName} />
        <DiGulp className={iconClassName} style={{ color: '#DB4446' }} />
        <RamdaLogo className={iconClassName} />
        <DiReact className={iconClassName} style={{ color: '#61dafb' }} />
      </IconLine>
    </>
  );
};

export default Revonarchy;
