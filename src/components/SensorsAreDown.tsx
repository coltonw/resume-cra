import React from 'react';
import { FaAws } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import Link from './Link';
import IconLine from './IconLine';
import sensorsaredownAudio from '../media/sensorsaredown.mp3';
import { ReactComponent as AlexaLogo } from '../media/alexa-logo.svg';
import { ReactComponent as ServerlessLogo } from '../media/serverless-logo.svg';
import { ReactComponent as FlowLogo } from '../media/flow-logo.svg';

const iconClassName = 'flex-none w-8 h-8 mx-2 text-gray-800 fill-current';

const SensorsAreDown = () => {
  return (
    <>
      <SectionHeading>Gaming Side Projects</SectionHeading>
      <div className="my-4">
        I have always loved designing and programming video games, but the
        problem is that video games have a lot of art and I do not enjoy making
        art.
      </div>
      <div className="my-4">
        Enter Alexa. I could make an audio only game! I decided to create an
        Alexa space combat game (
        <Link href="https://github.com/coltonw/sensors-are-down">source</Link>;
        never published).
      </div>
      <div className="my-4">
        In the end, I created something that just wasn't very fun. I fell into
        the trap of making a system too complex considering you cannot see the
        current state. I think I had some good ideas and I have follow-up ideas
        for redesigns but I shelved the game for now.
      </div>
      <audio src={sensorsaredownAudio} controls className="w-full" />
      <div className="text-xs text-center">Sorry for poor audio quality</div>
      <div className="my-4">
        This project involved mostly learning various AWS technologies that go
        into making an Alexa skill. I used an AWS Lambda which I deployed to
        using the Serverless Framework. I also tried typed JavaScript for the
        first time but picked a losing horse and used flow-typed.
      </div>
      <IconLine>
        <AlexaLogo className={iconClassName} />
        <FaAws className={iconClassName} />
        <ServerlessLogo className={iconClassName} />
        <FlowLogo className={iconClassName} />
      </IconLine>
    </>
  );
};

export default SensorsAreDown;
