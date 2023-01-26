import React from 'react';
import Banner from './components/Banner/Banner';
import CharacterDesign from './components/CharacterDesign/CharacterDesign';
import Navigation from "./components/Navigation/Navigation";
import Services from './components/Services/Services';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <Navigation />
      <Banner />
      <Services />
      <CharacterDesign />
    </div>
  );
}

export default App;
