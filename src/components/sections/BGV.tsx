import React from 'react';
import Paragraph from '../Paragraph';
import Link from '../Link';
import EmbeddedImage from '../EmbeddedImage';
import BGVScreenshot from '../../media/bgv.png';
import IndifferenceLine from '../iconLines/IndifferenceLine';

const BGV = () => {
  return (
    <>
      <IndifferenceLine />
      <Paragraph>
        I was tired of sending a survey out and then manually entering the
        survey data into my program. I started on the Indifference Engine (
        <Link href="https://github.com/coltonw/boardgamevote">source</Link>;{' '}
        <Link href="http://boardgamevote.herokuapp.com/">old broken site</Link>
        ), so called because it allowed for people's ranked choice votes to have
        ties in them. It started out based on my earlier IRV / Borda blend but
        eventually was migrated to the{' '}
        <Link href="https://en.wikipedia.org/wiki/Minimax_Condorcet_method">
          minimax method
        </Link>
        .
      </Paragraph>
      <EmbeddedImage
        src={BGVScreenshot}
        alt="Indifference Engine Screenshot"
        width={748}
        height={556}
      />
      <Paragraph>
        I spent quite a bit more time on this project and learned about Node.js,
        Express, publishing packages on npm, MongoDB, Heroku, unit testing in
        Mocha, test coverage in Coveralls, CI/CD on Travis CI, Bootstrap, and
        using templates in Dust.js.
      </Paragraph>
    </>
  );
};

export default BGV;
