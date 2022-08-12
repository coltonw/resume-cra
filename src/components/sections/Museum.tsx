import React from 'react';
import SectionHeading from '../SectionHeading';
import Paragraph from '../Paragraph';
import MuseumLine from '../iconLines/MuseumLine';

const Museum = () => (
  <>
    <SectionHeading>The museum is its own exhibit</SectionHeading>
    <MuseumLine />
    <Paragraph>
      Last, but certainly not least, I want to discuss the very site you are on
      right now. The intention is to have several implementations in different
      UI frameworks both as a quick way to learn a bunch of technologies and as
      a demonstration of their performance against each other on a simple one
      page website.
    </Paragraph>
    <Paragraph>
      This museum implementation is built using Create React App. For styling it
      uses Tailwind CSS. It is deployed using Netlify.
    </Paragraph>
  </>
);

export default Museum;
