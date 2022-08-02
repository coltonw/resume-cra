import React from 'react';
import { FaAws } from 'react-icons/fa';
import { ReactComponent as AlexaLogo } from '../../media/alexa-logo.svg';
import { ReactComponent as ServerlessLogo } from '../../media/serverless-logo.svg';
import { ReactComponent as FlowLogo } from '../../media/flow-logo.svg';
import IconLine from '../IconLine';
import LineDate from '../LineDate';
import LineIcon from '../LineIcon';
import SubHeading from '../SubHeading';
import SubHeadingTitle from '../SubHeadingTitle';
import { iconClassName } from './util';

const SensorsAreDownLine = () => (
  <SubHeading>
    <SubHeadingTitle>Sensors Are Down</SubHeadingTitle>
    <IconLine>
      <LineDate>2017</LineDate>
      <LineIcon
        title="Amazon Alexa"
        href="https://www.developer.amazon.com/en-US/alexa/"
      >
        <AlexaLogo className={iconClassName} />
      </LineIcon>
      <LineIcon title="Amazon Web Services" href="https://aws.amazon.com/">
        <FaAws className={iconClassName} />
      </LineIcon>
      <LineIcon title="Serverless Framework" href="https://www.serverless.com/">
        <ServerlessLogo className={iconClassName} />
      </LineIcon>
      <LineIcon title="Flow" href="https://flow.org/">
        <FlowLogo className={iconClassName} />
      </LineIcon>
    </IconLine>
  </SubHeading>
);

export default SensorsAreDownLine;
