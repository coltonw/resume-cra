import React from 'react';
import {
  DiNodejsSmall,
  DiNpm,
  DiMongodb,
  DiHeroku,
  DiTravis,
  DiBootstrap,
} from 'react-icons/di';
import { FaStar } from 'react-icons/fa';
import EmbeddedImage from './EmbeddedImage';
import BGVScreenshot from '../media/bgv.png';
import { ReactComponent as MochaLogo } from '../media/mocha.svg';

const iconClassName = 'flex-none w-8 h-8 mx-2 text-gray-800 fill-current';

const BGV = () => {
  return (
    <>
      <div className="my-4">
        I was tired of sending a survey out and then manually entering the
        survey data into my program. I started on the Indifference Engine (
        <a
          href="https://github.com/coltonw/boardgamevote"
          className="text-gray-500 font-semibold hover:underline hover:text-gray-800"
        >
          source
        </a>
        ;{' '}
        <a
          href="http://boardgamevote.herokuapp.com/"
          className="text-gray-500 font-semibold hover:underline hover:text-gray-800"
        >
          old broken site
        </a>
        ), so called because it allowed for people's ranked choice votes to have
        ties in them. It started out based on my earlier IRV / Borda blend but
        eventually was migrated to the{' '}
        <a
          href="https://en.wikipedia.org/wiki/Minimax_Condorcet_method"
          className="text-gray-500 font-semibold hover:underline hover:text-gray-800"
        >
          minimax method
        </a>
        .
      </div>
      <EmbeddedImage src={BGVScreenshot} alt="Indifference Engine Screenshot" />
      <div className="my-4">
        I spent quite a bit more time on this project and learned about Node.js,
        Express, publishing packages on npm, MongoDB, Heroku, unit testing in
        Mocha, test coverage in Coveralls, CI/CD on Travis CI, Bootstrap, and
        using templates in Dust.js.
      </div>
      <div className="w-full flex flex-row items-center mb-8">
        <div className="flex-1 border-t-2 border-gray-200" />
        <DiNodejsSmall className={iconClassName} />
        <div
          className="flex-none mx-2 text-gray-800"
          style={{
            fontFamily: 'helvetica neue,open sans,sans-serif',
            fontWeight: 100,
          }}
        >
          ex
        </div>
        <DiNpm className={iconClassName} />
        <DiMongodb className={iconClassName} />
        <DiHeroku className={iconClassName} />
        <MochaLogo className={iconClassName} />
        <FaStar className={iconClassName} />
        <DiTravis className={iconClassName} />
        <DiBootstrap className={iconClassName} />
        <div
          className="flex-none mx-2 text-gray-800"
          style={{
            fontFamily: 'Dosis,sans-serif',
            fontWeight: 100,
          }}
        >
          Dust.js
        </div>
        <div className="flex-1 border-t-2 border-gray-200" />
      </div>
    </>
  );
};

export default BGV;
