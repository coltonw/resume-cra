import React from 'react';
import { FaAws } from 'react-icons/fa';
import SectionHeading from '../SectionHeading';
import SubHeading from '../SubHeading';
import SubHeadingTitle from '../SubHeadingTitle';
import Paragraph from '../Paragraph';
import Link from '../Link';
import IconLine from '../IconLine';
import LineDate from '../LineDate';
import LineIcon from '../LineIcon';
import sensorsaredownAudio from '../../media/sensorsaredown.mp3';
import { ReactComponent as AlexaLogo } from '../../media/alexa-logo.svg';
import { ReactComponent as ServerlessLogo } from '../../media/serverless-logo.svg';
import { ReactComponent as FlowLogo } from '../../media/flow-logo.svg';

const iconClassName = 'flex-none w-8 h-8 mx-2 text-stone-700 fill-current';

const SensorsAreDown = () => {
  return (
    <>
      <SectionHeading>Gaming Side Projects</SectionHeading>
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
          <LineIcon
            title="Serverless Framework"
            href="https://www.serverless.com/"
          >
            <ServerlessLogo className={iconClassName} />
          </LineIcon>
          <LineIcon title="Flow" href="https://flow.org/">
            <FlowLogo className={iconClassName} />
          </LineIcon>
        </IconLine>
      </SubHeading>
      <Paragraph>
        I have always loved designing and programming video games, but the
        problem is that video games have a lot of art and I do not enjoy making
        art.
      </Paragraph>
      <Paragraph>
        Enter Alexa. I could make an audio only game! I decided to create an
        Alexa space combat game (
        <Link href="https://github.com/coltonw/sensors-are-down">source</Link>;
        never published).
      </Paragraph>
      <Paragraph>
        In the end, I created something that just wasn't very fun. I fell into
        the trap of making a system too complex considering you cannot see the
        current state. I think I had some good ideas and I have follow-up ideas
        for redesigns but I shelved the game for now.
      </Paragraph>
      <audio src={sensorsaredownAudio} controls className="w-full" />
      <div className="text-xs text-center">Sorry for poor audio quality</div>
      <Paragraph>
        This project involved mostly learning various AWS technologies that go
        into making an Alexa skill. I used an AWS Lambda which I deployed to
        using the Serverless Framework. I also tried typed JavaScript for the
        first time but picked a losing horse and used flow-typed.
      </Paragraph>
    </>
  );
};

export default SensorsAreDown;
