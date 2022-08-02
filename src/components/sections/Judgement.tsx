import React from 'react';
import SectionHeading from '../SectionHeading';
import Paragraph from '../Paragraph';
import Link from '../Link';
import EmbeddedVideo from '../EmbeddedVideo';
import JudgementWebm from '../../media/judgement.webm';
import JudgementMp4 from '../../media/judgement.mp4';
import JudgementLine from '../iconLines/JudgementLine';

const Judgement = () => {
  return (
    <>
      <SectionHeading>A Triumphant Return to Voting</SectionHeading>
      <JudgementLine />
      <Paragraph>
        After a long hiatus, I decided to go back to the drawing board with
        voting. I had been reading about this new interesting voting method
        known as{' '}
        <Link href="https://en.wikipedia.org/wiki/Majority_judgment">
          Majority Judgement
        </Link>
        . I implemented a modernized board game night voting site (
        <Link href="https://github.com/coltonw/majudge">source</Link>; site no
        longer deployed).
      </Paragraph>
      <EmbeddedVideo webm={JudgementWebm} mp4={JudgementMp4} />
      <Paragraph>
        After learning a lot of frontend work in my day job, this project became
        focused on learning more backend and devops. I used Elixir's Phoenix
        Framework for the backend and deployed it using CircleCI and Amazon ECS.
        The frontend was React using nivo for charts, Bulma for CSS, and webpack
        for bundling.
      </Paragraph>
    </>
  );
};

export default Judgement;
