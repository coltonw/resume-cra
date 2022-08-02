import React from 'react';
import { DiReact } from 'react-icons/di';
import { FaAws } from 'react-icons/fa';
import { SiGatsby, SiAuth0, SiGraphql, SiTypescript } from 'react-icons/si';
import { ReactComponent as CircleCILogo } from '../../media/circleci-logo.svg';
import { ReactComponent as ServerlessLogo } from '../../media/serverless-logo.svg';
import IconLine from '../IconLine';
import LineDate from '../LineDate';
import LineIcon from '../LineIcon';
import SubHeading from '../SubHeading';
import SubHeadingTitle from '../SubHeadingTitle';
import { iconClassName } from './util';

const PuzzleSyncLine = () => (
  <SubHeading>
    <SubHeadingTitle>PuzzleSync</SubHeadingTitle>
    <IconLine>
      <LineDate>2020</LineDate>
      <LineIcon title="Gatsby" href="https://www.gatsbyjs.com/">
        <SiGatsby
          title="Gatsby"
          className={`${iconClassName} text-purple-700`}
        />
      </LineIcon>
      <LineIcon title="React" href="https://reactjs.org/">
        <DiReact className={iconClassName} style={{ color: '#61dafb' }} />
      </LineIcon>
      <LineIcon title="TypeScript" href="https://www.typescriptlang.org/">
        <SiTypescript
          title="TypeScript"
          className={`${iconClassName} text-blue-500`}
        />
      </LineIcon>
      <LineIcon title="GraphQL" href="https://graphql.org/">
        <SiGraphql
          title="GraphQL"
          className={`${iconClassName} text-pink-600`}
        />
      </LineIcon>
      <LineIcon title="Auth0" href="https://auth0.com/">
        <SiAuth0 title="Auth0" className={`${iconClassName} text-orange-600`} />
      </LineIcon>
      <LineIcon title="CircleCI" href="https://circleci.com/">
        <CircleCILogo className={iconClassName} />
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

export default PuzzleSyncLine;
