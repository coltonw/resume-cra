import React from 'react';
import { FaAws } from 'react-icons/fa';
import { SiNextdotjs, SiVercel } from 'react-icons/si';
import { ReactComponent as BulmaLogo } from '../../media/bulma-logo.svg';
import IconLine from '../IconLine';
import LineDate from '../LineDate';
import LineIcon from '../LineIcon';
import SubHeading from '../SubHeading';
import SubHeadingTitle from '../SubHeadingTitle';
import { iconClassName } from './util';

const DanyconScheduleLine = () => (
  <SubHeading>
    <SubHeadingTitle>Convention Schedule</SubHeadingTitle>
    <IconLine>
      <LineDate>2022</LineDate>
      <LineIcon title="Next.js" href="https://nextjs.org/">
        <SiNextdotjs
          title="Next.js"
          className={`${iconClassName} text-stone-800`}
        />
      </LineIcon>
      <LineIcon title="Vercel" href="https://vercel.com/home">
        <SiVercel
          title="Vercel"
          className={`${iconClassName} text-stone-800`}
        />
      </LineIcon>
      <LineIcon title="Bulma" href="https://bulma.io/">
        <BulmaLogo className={iconClassName} />
      </LineIcon>
      <LineIcon title="Amazon Web Services" href="https://aws.amazon.com/">
        <FaAws className={iconClassName} />
      </LineIcon>
    </IconLine>
  </SubHeading>
);

export default DanyconScheduleLine;
