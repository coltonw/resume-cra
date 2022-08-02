import React from 'react';
import { ReactComponent as ScalaJSLogo } from '../../media/scala-js-logo.svg';
import IconLine from '../IconLine';
import LineDate from '../LineDate';
import LineIcon from '../LineIcon';
import SubHeading from '../SubHeading';
import SubHeadingTitle from '../SubHeadingTitle';
import { iconClassName } from './util';

const IcgScalaJsLine = () => (
  <SubHeading>
    <SubHeadingTitle>Scala.js</SubHeadingTitle>
    <IconLine>
      <LineDate>2018</LineDate>
      <LineIcon title="Scala.js" href="https://www.scala-js.org/">
        <ScalaJSLogo className={iconClassName} />
      </LineIcon>
    </IconLine>
  </SubHeading>
);

export default IcgScalaJsLine;
