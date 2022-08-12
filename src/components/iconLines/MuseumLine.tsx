import React from 'react';
import { SiNetlify, SiTailwindcss } from 'react-icons/si';
import { ReactComponent as CRALogo } from '../../media/cra-logo.svg';
import IconLine from '../IconLine';
import LineDate from '../LineDate';
import LineIcon from '../LineIcon';
import SubHeading from '../SubHeading';
import SubHeadingTitle from '../SubHeadingTitle';
import { iconClassName } from './util';

const MuseumLine = () => (
  <SubHeading>
    <SubHeadingTitle>Create React App</SubHeadingTitle>
    <IconLine>
      <LineDate>2020-2022</LineDate>
      <LineIcon title="Create React App" href="https://create-react-app.dev/">
        <CRALogo className={iconClassName} />
      </LineIcon>
      <LineIcon title="Tailwind CSS" href="https://tailwindcss.com/">
        <SiTailwindcss
          title="Tailwind CSS"
          className={`${iconClassName} text-sky-400`}
        />
      </LineIcon>
      <LineIcon title="Netlify" href="https://www.netlify.com/">
        <SiNetlify
          title="Netlify"
          className={`${iconClassName} text-teal-500`}
        />
      </LineIcon>
    </IconLine>
  </SubHeading>
);

export default MuseumLine;
