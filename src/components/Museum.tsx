import React from 'react';
import { SiTailwindcss } from 'react-icons/si';
import SectionHeading from './SectionHeading';
import IconLine from './IconLine';
import { ReactComponent as CRALogo } from '../media/cra-logo.svg';

const iconClassName = 'flex-none w-8 h-8 mx-2 text-gray-800 fill-current';

const Museum = () => (
  <>
    <SectionHeading>The museum is its own exhibit</SectionHeading>
    <div className="my-4">
      Last, but certainly not least, I want to discuss the very site you are on
      right now. The intention is to have several implementations in different
      UI frameworks both as a quick way to learn a bunch of technologies and as
      a demonstration of their performance against each other on a simple one
      page website.
    </div>
    <div className="my-4">
      This museum implementation is built using Create React App. For styling it
      uses Tailwind CSS.
    </div>
    <IconLine>
      <CRALogo className={iconClassName} />
      <SiTailwindcss className={`${iconClassName} text-sky-400`} />
    </IconLine>
  </>
);

export default Museum;
