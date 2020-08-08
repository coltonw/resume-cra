import React from 'react';
import EmbeddedImage from './EmbeddedImage';
import BGVScreenshot from '../media/bgv.jpg';

const BGV = () => {
  return (
    <>
      <div className="my-4">
        I was tired of sending a survey out and then manually entering the
        survey data into my program. I started on the Indifference Engine (
        <a
          href="https://github.com/coltonw/boardgamevote"
          className="text-gray-500 font-semibold hover:underline hover:text-gray-800"
        >
          source
        </a>
        ;{' '}
        <a
          href="http://boardgamevote.herokuapp.com/"
          className="text-gray-500 font-semibold hover:underline hover:text-gray-800"
        >
          old broken site
        </a>
        ), so called because it allowed for people's ranked choice votes to have
        ties in them. It started out based on my earlier IRV / Borda blend but
        eventually was migrated to the minimax method.
      </div>
      <EmbeddedImage src={BGVScreenshot} alt="Indifference Engine Screenshot" />
    </>
  );
};

export default BGV;
