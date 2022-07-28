import React from 'react';
import { FaAws } from 'react-icons/fa';
import { SiNextdotjs, SiVercel } from 'react-icons/si';
import Link from '../Link';
import EmbeddedVideo from '../EmbeddedVideo';
import IconLine from '../IconLine';
import DanyconScheduleWebm from '../../media/danyconschedule.webm';
import DanyconScheduleMp4 from '../../media/danyconschedule.mp4';
import { ReactComponent as BulmaLogo } from '../../media/bulma-logo.svg';

const iconClassName = 'flex-none w-8 h-8 mx-2 text-gray-800 fill-current';

const DanyconSchedule = () => (
  <>
    <div className="my-4">
      The most recent family get-together I decided to make a digital schedule.
      I added some functionality where attendees could pick which games they
      were going to join (
      <Link href="https://github.com/coltonw/danycon-schedule/">source</Link>;{' '}
      <Link href="https://danycon-schedule.vercel.app/">site</Link> - use
      username Will and give it a few minutes for vercel to start the server
      before refreshing and logging in).
    </div>
    <EmbeddedVideo webm={DanyconScheduleWebm} mp4={DanyconScheduleMp4} />
    <div className="my-4">
      I had the pleasure of building this site using Next.js and deploying using
      Vercel. It made my life really easy and I definitely want to work with
      Next.js more in the future. For styling I used Bulma and as a database I
      used AWS DynamoDB.
    </div>
    <IconLine>
      <SiNextdotjs className={`${iconClassName} text-gray-900`} />
      <SiVercel className={`${iconClassName} text-gray-900`} />
      <BulmaLogo className={iconClassName} />
      <FaAws className={iconClassName} />
    </IconLine>
  </>
);

export default DanyconSchedule;
