import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import VotingIntro from './components/VotingIntro';
import Golang from './components/Golang';
import BGV from './components/BGV';
import Revonarchy from './components/Revonarchy';
import Judgement from './components/Judgement';
import SensorsAreDown from './components/SensorsAreDown';
import ICG from './components/ICG';
import PuzzleSync from './components/PuzzleSync';
import BoatsAndBridges from './components/BoatsAndBridges';
import Museum from './components/Museum';

function App() {
  return (
    <div className="container max-w-screen-md mx-auto text-lg font-sans p-2">
      <Header />
      <Intro />
      <VotingIntro />
      <Golang />
      <BGV />
      <Revonarchy />
      <Judgement />
      <SensorsAreDown />
      <ICG />
      <PuzzleSync />
      <BoatsAndBridges />
      <Museum />
    </div>
  );
}

export default App;
