import React from 'react';
import { FaAws, FaUnity } from 'react-icons/fa';
import { ReactComponent as CSharpLogo } from '../../media/csharp-logo.svg';
import { ReactComponent as PythonLogo } from '../../media/python-logo.svg';
import { ReactComponent as ServerlessLogo } from '../../media/serverless-logo.svg';
import IconLine from '../IconLine';
import LineDate from '../LineDate';
import LineIcon from '../LineIcon';
import SubHeading from '../SubHeading';
import SubHeadingTitle from '../SubHeadingTitle';
import { iconClassName } from './util';

const IcgUnityLine = () => (
  <SubHeading>
    <SubHeadingTitle>Unity</SubHeadingTitle>
    <IconLine>
      <LineDate>2019</LineDate>
      <LineIcon title="Unity" href="https://unity.com/">
        <FaUnity className={iconClassName} />
      </LineIcon>
      <LineIcon
        title="C#"
        href="https://docs.microsoft.com/en-us/dotnet/csharp/"
      >
        <CSharpLogo className={iconClassName} />
      </LineIcon>
      <LineIcon title="Python" href="https://www.python.org/">
        <PythonLogo className={iconClassName} />
      </LineIcon>
      <LineIcon title="Amazon Web Services" href="https://aws.amazon.com/">
        <FaAws className={iconClassName} />
      </LineIcon>
      <LineIcon title="Serverless Framework" href="https://www.serverless.com/">
        <ServerlessLogo className={iconClassName} />
      </LineIcon>
    </IconLine>
  </SubHeading>
);

export default IcgUnityLine;
