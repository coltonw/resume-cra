import React from 'react';
import { DiBower, DiGulp, DiReact } from 'react-icons/di';
import { FaLess } from 'react-icons/fa';
import { ReactComponent as RamdaLogo } from '../../media/ramda-logo.svg';
import IconLine from '../IconLine';
import LineDate from '../LineDate';
import LineIcon from '../LineIcon';
import SubHeading from '../SubHeading';
import SubHeadingTitle from '../SubHeadingTitle';
import { iconClassName } from './util';

const RevonarchyLine = () => (
  <SubHeading>
    <SubHeadingTitle>Revonarchy</SubHeadingTitle>
    <IconLine>
      <LineDate>2015</LineDate>
      <LineIcon title="Bower" href="https://bower.io/">
        <DiBower className={iconClassName} />
      </LineIcon>
      <LineIcon title="Koa" href="https://koajs.com/">
        <div
          className="flex-none mx-2 text-stone-700"
          style={{
            fontFamily: 'italiana,sans-serif',
          }}
        >
          koa
        </div>
      </LineIcon>
      <LineIcon title="Less" href="https://lesscss.org/">
        <FaLess className={iconClassName} />
      </LineIcon>
      <LineIcon title="Gulp" href="https://gulpjs.com/">
        <DiGulp className={iconClassName} style={{ color: '#DB4446' }} />
      </LineIcon>
      <LineIcon title="Ramda" href="https://ramdajs.com/">
        <RamdaLogo className={iconClassName} />
      </LineIcon>
      <LineIcon title="React" href="https://reactjs.org/">
        <DiReact className={iconClassName} style={{ color: '#61dafb' }} />
      </LineIcon>
    </IconLine>
  </SubHeading>
);

export default RevonarchyLine;
