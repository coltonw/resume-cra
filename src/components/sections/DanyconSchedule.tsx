import React from 'react';
import Paragraph from '../Paragraph';
import Link from '../Link';
import EmbeddedVideo from '../EmbeddedVideo';
import DanyconScheduleWebm from '../../media/danyconschedule.webm';
import DanyconScheduleMp4 from '../../media/danyconschedule.mp4';
import DanyconScheduleLine from '../iconLines/DanyconScheduleLine';

const DanyconSchedule = () => (
  <>
    <DanyconScheduleLine />
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
