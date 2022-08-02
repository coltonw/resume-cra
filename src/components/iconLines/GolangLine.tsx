import React from 'react';
import { DiGo } from 'react-icons/di';
import IconLine from '../IconLine';
import LineDate from '../LineDate';
import LineIcon from '../LineIcon';
import SubHeading from '../SubHeading';
import SubHeadingTitle from '../SubHeadingTitle';
import { iconClassName } from './util';

const GolangLine = () => (
  <SubHeading>
    <SubHeadingTitle>Go Vote Tally</SubHeadingTitle>
    <IconLine>
      <LineDate>2013-2014</LineDate>
      <LineIcon title="Go" href="https://go.dev/">
        <DiGo className={iconClassName} />
      </LineIcon>
    </IconLine>
  </SubHeading>
);

export default GolangLine;
