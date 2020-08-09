import React from 'react';
import { DiBower, DiLess, DiGulp, DiReact } from 'react-icons/di';
import EmbeddedVideo from './EmbeddedVideo';
import RevonarchyVideo from '../media/revonarchy.webm';

const iconClassName = 'flex-none w-8 h-8 mx-2 text-gray-800 fill-current';

const Revonarchy = () => {
  return (
    <>
      <h1 className="text-2xl mt-8 mb-4 font-bold uppercase font-serif">
        No more voting!
      </h1>
      <div className="my-4">
        I got tired of my favorite games never getting picked, so I decided to
        move away from voting to let people just pick a game and then rotate who
        picks the game each time. The problem that quickly showed up was that
        some people would only show up rarely and yet got to pick just as often,
        Thus Revonarchy was born. (
        <a
          href="https://github.com/coltonw/revonarchy"
          className="text-gray-500 font-semibold hover:underline hover:text-gray-800"
        >
          Source
        </a>
        ; site was never deployed)
      </div>
      <EmbeddedVideo src={RevonarchyVideo} />
      <div className="my-4">
        Revonarchy was relatively short lived but I still learned some great
        stuff including Bower, Koa, Less, Gulp, and most importantly React.
      </div>
      <div className="w-full flex flex-row items-center mb-8">
        <div className="flex-1 border-t-2 border-gray-200" />
        <DiBower className={iconClassName} />
        <div
          className="flex-none mx-2 text-gray-800"
          style={{
            fontFamily: 'italiana,sans-serif',
          }}
        >
          koa
        </div>
        <DiLess className={iconClassName} />
        <DiGulp className={iconClassName} />
        <DiReact className={iconClassName} />
        <div className="flex-1 border-t-2 border-gray-200" />
      </div>
    </>
  );
};

export default Revonarchy;
