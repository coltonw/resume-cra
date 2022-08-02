import React from 'react';
import { DiNodejsSmall } from 'react-icons/di';
import { FaUnity } from 'react-icons/fa';
import { SiBabel, SiRust } from 'react-icons/si';
import { ReactComponent as WebpackLogo } from '../../media/webpack-logo.svg';
import { ReactComponent as CSharpLogo } from '../../media/csharp-logo.svg';
import IconLine from '../IconLine';
import LineDate from '../LineDate';
import LineIcon from '../LineIcon';
import SubHeading from '../SubHeading';
import SubHeadingTitle from '../SubHeadingTitle';
import { iconClassName } from './util';

const BoatsAndBridgesLine = () => (
  <SubHeading>
    <SubHeadingTitle>Boats and Bridges</SubHeadingTitle>
    <IconLine>
      <LineDate>2020-2021</LineDate>
      <LineIcon title="Node.js" href="https://nodejs.org/en/">
        <DiNodejsSmall className={iconClassName} style={{ color: '#43853d' }} />
      </LineIcon>
      <LineIcon title="Lodash" href="https://lodash.com/">
        <div className="flex-none mx-2 text-black underline decoration-blue-600 decoration-2 font-bold">
          Lo
        </div>
      </LineIcon>
      <LineIcon title="Babel" href="https://babeljs.io/">
        <SiBabel title="Babel" className={`${iconClassName} text-yellow-600`} />
      </LineIcon>
      <LineIcon title="Webpack" href="https://webpack.js.org/">
        <WebpackLogo className={iconClassName} />
      </LineIcon>
      <LineIcon title="Unity" href="https://unity.com/">
        <FaUnity className={iconClassName} />
      </LineIcon>
      <LineIcon
        title="C#"
        href="https://docs.microsoft.com/en-us/dotnet/csharp/"
      >
        <CSharpLogo className={iconClassName} />
      </LineIcon>
      <LineIcon title="Rust" href="https://www.rust-lang.org/">
        <SiRust title="Rust" className={iconClassName} />
      </LineIcon>
    </IconLine>
  </SubHeading>
);

export default BoatsAndBridgesLine;
