import React from 'react';
import SectionHeading from '../SectionHeading';
import Paragraph from '../Paragraph';
import Link from '../Link';
import EmbeddedVideo from '../EmbeddedVideo';
import PuzzleSyncWebm from '../../media/puzzlesync.webm';
import PuzzleSyncMp4 from '../../media/puzzlesync.mp4';
import PuzzleSyncLine from '../iconLines/PuzzleSyncLine';

const PuzzleSync = () => (
  <>
    <SectionHeading>Fun with Family</SectionHeading>
    <PuzzleSyncLine />
    <Paragraph>
      My family does an annual get-together where we play games and solve
      puzzles together. For the occasion I decided to make a little quiz game,
      sort of a cooperative version of sporcle. I used the opportunity to learn
      Gatsby and sharpen my skills with websockets (
      <Link href="https://github.com/coltonw/simple-websockets-chat-app/">
        backend source
      </Link>
      ; frontend has private source and implementation).
    </Paragraph>
    <EmbeddedVideo
      webm={PuzzleSyncWebm}
      mp4={PuzzleSyncMp4}
      width={1194}
      height={790}
    />
    <Paragraph>
      It was my first time using any sort of react based static site generator.
      I found Gatsby to be annoying to use especially their GraphQL internal
      api. I switched from JavaScript to TypeScript starting with this project.
      I deployed the frontend using CircleCI for CI/CD and Amazon S3 to host. I
      learned Auth0 for authentication and authorization.
    </Paragraph>
    <Paragraph>
      I used an aws official sample for a chat app as the foundation for my
      backend. I deployed the backend using Serverless and included Lambdas,
      DynamoDB, and ApiGateway from AWS.
    </Paragraph>
  </>
);

export default PuzzleSync;
