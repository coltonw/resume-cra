import React from 'react';
import { DiNodejsSmall, DiNpm, DiHeroku, DiBootstrap } from 'react-icons/di';
import SubHeading from '../SubHeading';
import SubHeadingTitle from '../SubHeadingTitle';
import Paragraph from '../Paragraph';
import Link from '../Link';
import EmbeddedImage from '../EmbeddedImage';
import IconLine from '../IconLine';
import LineDate from '../LineDate';
import LineIcon from '../LineIcon';
import BGVScreenshot from '../../media/bgv.png';
import { ReactComponent as TravisCILogo } from '../../media/travisci-logo.svg';
import { ReactComponent as MochaLogo } from '../../media/mocha.svg';
import { ReactComponent as MongoDBLogo } from '../../media/mongodb-logo.svg';

const iconClassName = 'flex-none w-8 h-8 mx-2 text-stone-700 fill-current';

const BGV = () => {
  return (
    <>
      <SubHeading>
        <SubHeadingTitle>Indifference Engine</SubHeadingTitle>
        <IconLine>
          <LineDate>2014-2015</LineDate>
          <LineIcon title="Node.js" href="https://nodejs.org/en/">
            <DiNodejsSmall
              className={iconClassName}
              style={{ color: '#43853d' }}
            />
          </LineIcon>
          <LineIcon title="Express" href="https://expressjs.com/">
            <div
              className="flex-none mx-2 text-stone-700"
              style={{
                fontFamily: 'helvetica neue,open sans,sans-serif',
                fontWeight: 100,
              }}
            >
              ex
            </div>
          </LineIcon>
          <LineIcon title="npm" href="https://www.npmjs.com/">
            <DiNpm className={`${iconClassName} text-red-600`} />
          </LineIcon>
          <LineIcon title="MongoDB" href="https://www.mongodb.com/">
            <MongoDBLogo className={iconClassName} />
          </LineIcon>
          <LineIcon title="Heroku" href="https://www.heroku.com/">
            <DiHeroku className={iconClassName} style={{ color: '#79589F' }} />
          </LineIcon>
          <LineIcon title="Mocha" href="https://mochajs.org/">
            <MochaLogo className={iconClassName} />
          </LineIcon>
          <LineIcon title="Travis CI" href="https://www.travis-ci.com/">
            <TravisCILogo className={iconClassName} />
          </LineIcon>
          <LineIcon title="Bootstrap" href="https://getbootstrap.com/">
            <DiBootstrap
              className={iconClassName}
              style={{ color: '#7952b3' }}
            />
          </LineIcon>
          <LineIcon title="Dust.js" href="https://www.dustjs.com/">
            <div
              className="flex-none mx-2 text-stone-700"
              style={{
                fontFamily: 'Dosis,sans-serif',
                fontWeight: 100,
              }}
            >
              Dust.js
            </div>
          </LineIcon>
        </IconLine>
      </SubHeading>
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
    </>
  );
};

export default BGV;
