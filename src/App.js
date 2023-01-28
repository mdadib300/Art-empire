import React from 'react';
import AiArt from './components/AiArt/AiArt';
import Banner from './components/Banner/Banner';
import CharacterDesign from './components/CharacterDesign/CharacterDesign';
import DigitalArt from './components/DigitalArt/DigitalArt';
import Footer from './components/Footer/Footer';
import Navigation from "./components/Navigation/Navigation";
import Services from './components/Services/Services';
import TraditionalArt from './components/TraditionalArt/TraditionalArt';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto bg-primary'>
      <Navigation />
      <Banner />
      <Services />
      <CharacterDesign />
      <DigitalArt />
      <TraditionalArt />
      <AiArt />
      <Footer />
    </div>
  );
}

export default App;
