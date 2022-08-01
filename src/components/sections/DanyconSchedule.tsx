import React from 'react';
import { FaAws } from 'react-icons/fa';
import { SiNextdotjs, SiVercel } from 'react-icons/si';
import SubHeading from '../SubHeading';
import SubHeadingTitle from '../SubHeadingTitle';
import Paragraph from '../Paragraph';
import Link from '../Link';
import EmbeddedVideo from '../EmbeddedVideo';
import IconLine from '../IconLine';
import DanyconScheduleWebm from '../../media/danyconschedule.webm';
import DanyconScheduleMp4 from '../../media/danyconschedule.mp4';
import { ReactComponent as BulmaLogo } from '../../media/bulma-logo.svg';
import LineDate from '../LineDate';
import LineIcon from '../LineIcon';

const iconClassName = 'flex-none w-8 h-8 mx-2 text-stone-700 fill-current';

const DanyconSchedule = () => (
  <>
    <SubHeading>
      <SubHeadingTitle>Convention Schedule</SubHeadingTitle>
      <IconLine>
        <LineDate>2022</LineDate>
        <LineIcon title="Next.js" href="https://nextjs.org/">
          <SiNextdotjs
            title="Next.js"
            className={`${iconClassName} text-stone-800`}
          />
        </LineIcon>
        <LineIcon title="Vercel" href="https://vercel.com/home">
          <SiVercel
            title="Vercel"
            className={`${iconClassName} text-stone-800`}
          />
        </LineIcon>
        <LineIcon title="Bulma" href="https://bulma.io/">
          <BulmaLogo className={iconClassName} />
        </LineIcon>
        <LineIcon title="Amazon Web Services" href="https://aws.amazon.com/">
          <FaAws className={iconClassName} />
        </LineIcon>
      </IconLine>
    </SubHeading>
    <Paragraph>
      The most recent family get-together I decided to make a digital schedule.
      I added some functionality where attendees could pick which games they
      were going to join (
      <Link href="https://github.com/coltonw/danycon-schedule/">source</Link>;{' '}
      <Link href="https://danycon-schedule.vercel.app/">site</Link> - use
      username Will and give it a few minutes for vercel to start the server
      before refreshing and logging in).
    </Paragraph>
    <EmbeddedVideo webm={DanyconScheduleWebm} mp4={DanyconScheduleMp4} />
    <Paragraph>
      I had the pleasure of building this site using Next.js and deploying using
      Vercel. It made my life really easy and I definitely want to work with
      Next.js more in the future. For styling I used Bulma and as a database I
      used AWS DynamoDB.
    </Paragraph>
  </>
);

export default DanyconSchedule;
