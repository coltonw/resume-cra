import React from 'react';
import { DiBootstrap, DiHeroku, DiNodejsSmall, DiNpm } from 'react-icons/di';
import { ReactComponent as TravisCILogo } from '../../media/travisci-logo.svg';
import { ReactComponent as MochaLogo } from '../../media/mocha.svg';
import { ReactComponent as MongoDBLogo } from '../../media/mongodb-logo.svg';
import IconLine from '../IconLine';
import LineDate from '../LineDate';
import LineIcon from '../LineIcon';
import SubHeading from '../SubHeading';
import SubHeadingTitle from '../SubHeadingTitle';
import { iconClassName } from './util';

const IndifferenceLine = () => (
  <SubHeading>
    <SubHeadingTitle>Indifference Engine</SubHeadingTitle>
    <IconLine>
      <LineDate>2014-2015</LineDate>
      <LineIcon title="Node.js" href="https://nodejs.org/en/">
        <DiNodejsSmall className={iconClassName} style={{ color: '#43853d' }} />
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
        <DiBootstrap className={iconClassName} style={{ color: '#7952b3' }} />
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
);

export default IndifferenceLine;
