import React from 'react';
import { DiReact } from 'react-icons/di';
import { FaAws } from 'react-icons/fa';
import { SiGatsby, SiAuth0 } from 'react-icons/si';
import SectionHeading from './SectionHeading';
import Link from './Link';
import EmbeddedVideo from './EmbeddedVideo';
import IconLine from './IconLine';
import PuzzleSyncWebm from '../media/puzzlesync.webm';
import PuzzleSyncMp4 from '../media/puzzlesync.mp4';
import { ReactComponent as CircleCILogo } from '../media/circleci-logo.svg';
import { ReactComponent as ServerlessLogo } from '../media/serverless-logo.svg';

const iconClassName = 'flex-none w-8 h-8 mx-2 text-gray-800 fill-current';

const PuzzleSync = () => (
  <>
    <SectionHeading>Fun with family</SectionHeading>
    <div className="my-4">
      My family does an annual get together where we play games and solve
      puzzles together. For the occasion I decided to make a little quiz game,
      sort of a cooperative version of sporcle. I used the opportunity to learn
      Gatsby and sharpen my skills with websockets (
      <Link href="https://github.com/coltonw/simple-websockets-chat-app/">
        backend source
      </Link>
      ; frontend has private source and implementation).
    </div>
    <EmbeddedVideo webm={PuzzleSyncWebm} mp4={PuzzleSyncMp4} />
    <div className="my-4">
      It was my first time using any sort of react based static site generator.
      I found Gatsby to be to annoying to use especially their graphql internal
      api. I deployed the frontend using CircleCI for CI/CD and Amazon S3 to
      host. I learned Auth0 for authentication and authorization.
    </div>
    <div className="my-4">
      I used an aws official sample for a chat app as the foundation for my
      backend. I deployed the backend using Serverless and included Lambdas,
      DynamoDB, and ApiGateway from AWS.
    </div>
    <IconLine>
      <SiGatsby className={`${iconClassName} text-purple-700`} />
      <DiReact className={iconClassName} style={{ color: '#61dafb' }} />
      <SiAuth0 className={`${iconClassName} text-orange-600`} />
      <CircleCILogo className={iconClassName} />
      <FaAws className={iconClassName} />
      <ServerlessLogo className={iconClassName} />
    </IconLine>
  </>
);

export default PuzzleSync;
