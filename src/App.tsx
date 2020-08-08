import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import VotingIntro from './components/VotingIntro';
import Golang from './components/Golang';
import BGV from './components/BGV';

function App() {
  return (
    <div className="container max-w-screen-md mx-auto text-lg font-sans p-2">
      <Header />
      <Intro />
      <VotingIntro />
      <Golang />
      <BGV />
    </div>
  );
}

export default App;
