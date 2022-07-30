import React from 'react';
import { DiNodejsSmall, DiNpm, DiHeroku, DiBootstrap } from 'react-icons/di';
import { FaStar } from 'react-icons/fa';
import Paragraph from '../Paragraph';
import Link from '../Link';
import EmbeddedImage from '../EmbeddedImage';
import IconLine from '../IconLine';
import LineDate from '../LineDate';
import BGVScreenshot from '../../media/bgv.png';
import { ReactComponent as TravisCILogo } from '../../media/travisci-logo.svg';
import { ReactComponent as MochaLogo } from '../../media/mocha.svg';
import { ReactComponent as MongoDBLogo } from '../../media/mongodb-logo.svg';

const iconClassName = 'flex-none w-8 h-8 mx-2 text-stone-700 fill-current';

const BGV = () => {
  return (
    <>
      <Paragraph>
        I was tired of sending a survey out and then manually entering the
        survey data into my program. I started on the Indifference Engine (
        <Link href="https://github.com/coltonw/boardgamevote">source</Link>;{' '}
        <Link href="http://boardgamevote.herokuapp.com/">old broken site</Link>
        ), so called because it allowed for people's ranked choice votes to have
        ties in them. It started out based on my earlier IRV / Borda blend but
        eventually was migrated to the{' '}
        <Link href="https://en.wikipedia.org/wiki/Minimax_Condorcet_method">
          minimax method
        </Link>
        .
      </Paragraph>
      <EmbeddedImage src={BGVScreenshot} alt="Indifference Engine Screenshot" />
      <Paragraph>
        I spent quite a bit more time on this project and learned about Node.js,
        Express, publishing packages on npm, MongoDB, Heroku, unit testing in
        Mocha, test coverage in Coveralls, CI/CD on Travis CI, Bootstrap, and
        using templates in Dust.js.
      </Paragraph>
      <IconLine>
        <LineDate>2014-2015</LineDate>
        <DiNodejsSmall className={iconClassName} style={{ color: '#43853d' }} />
        <div
          className="flex-none mx-2 text-stone-700"
          style={{
            fontFamily: 'helvetica neue,open sans,sans-serif',
            fontWeight: 100,
          }}
        >
          ex
        </div>
        <DiNpm className={iconClassName} style={{ color: '#C12127' }} />
        <MongoDBLogo className={iconClassName} />
        <DiHeroku className={iconClassName} style={{ color: '#79589F' }} />
        <MochaLogo className={iconClassName} />
        <FaStar className={iconClassName} />
        <TravisCILogo className={iconClassName} />
        <DiBootstrap className={iconClassName} style={{ color: '#7952b3' }} />
        <div
          className="flex-none mx-2 text-stone-700"
          style={{
            fontFamily: 'Dosis,sans-serif',
            fontWeight: 100,
          }}
        >
          Dust.js
        </div>
      </IconLine>
    </>
  );
};

export default BGV;
