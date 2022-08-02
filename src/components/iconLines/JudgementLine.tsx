import React from 'react';
import { DiReact } from 'react-icons/di';
import { FaAws } from 'react-icons/fa';
import { ReactComponent as ElixirLogo } from '../../media/elixir-logo.svg';
import { ReactComponent as PhoenixLogo } from '../../media/phoenix-logo.svg';
import { ReactComponent as CircleCILogo } from '../../media/circleci-logo.svg';
import { ReactComponent as NivoLogo } from '../../media/nivo-logo.svg';
import { ReactComponent as BulmaLogo } from '../../media/bulma-logo.svg';
import { ReactComponent as WebpackLogo } from '../../media/webpack-logo.svg';
import IconLine from '../IconLine';
import LineDate from '../LineDate';
import LineIcon from '../LineIcon';
import SubHeading from '../SubHeading';
import SubHeadingTitle from '../SubHeadingTitle';
import { iconClassName } from './util';

const JudgementLine = () => (
  <SubHeading>
    <SubHeadingTitle>Majority Judgment</SubHeadingTitle>
    <IconLine>
      <LineDate>2019</LineDate>
      <LineIcon title="elixir" href="https://elixir-lang.org/">
        <ElixirLogo className={iconClassName} />
      </LineIcon>
      <LineIcon
        title="Phoenix Framework"
        href="https://www.phoenixframework.org/"
      >
        <PhoenixLogo className={`${iconClassName} w-12`} />
      </LineIcon>
      <LineIcon title="CircleCI" href="https://circleci.com/">
        <CircleCILogo className={iconClassName} />
      </LineIcon>
      <LineIcon title="Amazon Web Services" href="https://aws.amazon.com/">
        <FaAws className={iconClassName} />
      </LineIcon>
      <LineIcon title="React" href="https://reactjs.org/">
        <DiReact className={iconClassName} style={{ color: '#61dafb' }} />
      </LineIcon>
      <LineIcon title="nivo" href="https://nivo.rocks/">
        <NivoLogo className={iconClassName} />
      </LineIcon>
      <LineIcon title="Bulma" href="https://bulma.io/">
        <BulmaLogo className={iconClassName} />
      </LineIcon>
      <LineIcon title="Webpack" href="https://webpack.js.org/">
        <WebpackLogo className={iconClassName} />
      </LineIcon>
    </IconLine>
  </SubHeading>
);

export default JudgementLine;
