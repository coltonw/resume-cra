import React from 'react';
import { SiTailwindcss } from 'react-icons/si';
import SectionHeading from '../SectionHeading';
import Paragraph from '../Paragraph';
import IconLine from '../IconLine';
import LineDate from '../LineDate';
import { ReactComponent as CRALogo } from '../../media/cra-logo.svg';

const iconClassName = 'flex-none w-8 h-8 mx-2 text-stone-700 fill-current';

const Museum = () => (
  <>
    <SectionHeading>The museum is its own exhibit</SectionHeading>
    <Paragraph>
      Last, but certainly not least, I want to discuss the very site you are on
      right now. The intention is to have several implementations in different
      UI frameworks both as a quick way to learn a bunch of technologies and as
      a demonstration of their performance against each other on a simple one
      page website.
    </Paragraph>
    <Paragraph>
      This museum implementation is built using Create React App. For styling it
      uses Tailwind CSS.
    </Paragraph>
    <IconLine>
      <LineDate>2020-2022</LineDate>
      <CRALogo className={iconClassName} />
      <SiTailwindcss className={`${iconClassName} text-sky-400`} />
    </IconLine>
  </>
);

export default Museum;
