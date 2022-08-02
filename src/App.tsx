import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Intro from './components/sections/Intro';
import VotingIntro from './components/sections/VotingIntro';
import Golang from './components/sections/Golang';
import BGV from './components/sections/BGV';
import Revonarchy from './components/sections/Revonarchy';
import Judgement from './components/sections/Judgement';
import SensorsAreDown from './components/sections/SensorsAreDown';
import ICG from './components/sections/ICG';
import PuzzleSync from './components/sections/PuzzleSync';
import BoatsAndBridges from './components/sections/BoatsAndBridges';
import DanyconSchedule from './components/sections/DanyconSchedule';
import Museum from './components/sections/Museum';
import Outro from './components/sections/Outro';
import Tldr from './components/Tldr';
import Link from './components/Link';

function App() {
  // Look Ma! I made my own router!
  const [showingTldr, setShowingTldr] = useState(
    window.location.search.indexOf('tldr') === 1
  );

  useEffect(() => {
    window.addEventListener('popstate', () => {
      setShowingTldr(window.location.search.indexOf('tldr') === 1);
    });
  });

  const showTldr = () => {
    window.history.pushState('', '', '/?tldr');
    setShowingTldr(true);
  };

  return (
    <div className="container max-w-screen-md mx-auto text-lg font-sans p-2">
      <Header />
      <Intro />
      {showingTldr ? (
        <Tldr />
      ) : (
        <>
          <div>
            <Link onClick={showTldr}>TL;DR</Link>
          </div>
          <VotingIntro />
          <Golang />
          <BGV />
          <Revonarchy />
          <Judgement />
          <SensorsAreDown />
          <ICG />
          <BoatsAndBridges />
          <PuzzleSync />
          <DanyconSchedule />
          <Museum />
          <Outro />
        </>
      )}
    </div>
  );
}

export default App;
