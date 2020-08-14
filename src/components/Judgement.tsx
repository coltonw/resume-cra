import React from 'react';
import { DiBower, DiLess, DiGulp, DiReact } from 'react-icons/di';
import EmbeddedVideo from './EmbeddedVideo';
import RevonarchyVideo from '../media/revonarchy.webm';

const iconClassName = 'flex-none w-8 h-8 mx-2 text-gray-800 fill-current';

const Judgement = () => {
  return (
    <>
      <h1 className="text-2xl mt-8 mb-4 font-bold uppercase font-serif">
        A Triumphant Return to Voting!
      </h1>
      <div className="my-4">
        After a long hiatus, I decided to go back to the drawing board with
        voting. I had been reading about this new interesting voting method
        known as{' '}
        <a
          href="https://en.wikipedia.org/wiki/Majority_judgment"
          className="text-gray-500 font-semibold hover:underline hover:text-gray-800"
        >
          Majority Judgement
        </a>
        . I decided to implement a modernized board game night voting site (
        <a
          href="https://github.com/coltonw/majudge"
          className="text-gray-500 font-semibold hover:underline hover:text-gray-800"
        >
          source
        </a>
        ;{' '}
        <a
          href="https://judge.willcolton.com"
          className="text-gray-500 font-semibold hover:underline hover:text-gray-800"
        >
          deployed site
        </a>
        ).
      </div>
      {/* <EmbeddedVideo src={RevonarchyVideo} />
      <div className="my-4">
        Revonarchy was relatively short lived but I still learned some great
        stuff including Bower, Koa, Less, Gulp, and most importantly React.
      </div>
      <div className="w-full flex flex-row items-center   mb-12">
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
        </div> */}
    </>
  );
};

export default Judgement;
