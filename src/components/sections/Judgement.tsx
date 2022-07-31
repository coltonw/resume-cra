import React from 'react';
import { DiReact } from 'react-icons/di';
import { FaAws } from 'react-icons/fa';
import SectionHeading from '../SectionHeading';
import SubHeading from '../SubHeading';
import SubHeadingTitle from '../SubHeadingTitle';
import Paragraph from '../Paragraph';
import Link from '../Link';
import EmbeddedVideo from '../EmbeddedVideo';
import IconLine from '../IconLine';
import JudgementWebm from '../../media/judgement.webm';
import JudgementMp4 from '../../media/judgement.mp4';
import { ReactComponent as ElixirLogo } from '../../media/elixir-logo.svg';
import { ReactComponent as PhoenixLogo } from '../../media/phoenix-logo.svg';
import { ReactComponent as CircleCILogo } from '../../media/circleci-logo.svg';
import { ReactComponent as NivoLogo } from '../../media/nivo-logo.svg';
import { ReactComponent as BulmaLogo } from '../../media/bulma-logo.svg';
import { ReactComponent as WebpackLogo } from '../../media/webpack-logo.svg';
import LineDate from '../LineDate';

const iconClassName = 'flex-none w-8 h-8 mx-2 text-stone-700 fill-current';

const Judgement = () => {
  return (
    <>
      <SectionHeading>A Triumphant Return to Voting</SectionHeading>
      <SubHeading>
        <SubHeadingTitle>Majority Judgment</SubHeadingTitle>
        <IconLine>
          <LineDate>2019</LineDate>
          <ElixirLogo className={iconClassName} />
          <PhoenixLogo className={`${iconClassName} w-12`} />
          <CircleCILogo className={iconClassName} />
          <FaAws className={iconClassName} />
          <DiReact className={iconClassName} style={{ color: '#61dafb' }} />
          <NivoLogo className={iconClassName} />
          <BulmaLogo className={iconClassName} />
          <WebpackLogo className={iconClassName} />
        </IconLine>
      </SubHeading>
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
