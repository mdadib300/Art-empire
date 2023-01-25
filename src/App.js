import React from 'react';
import Banner from './components/Banner/Banner';
import Navigation from "./components/Navigation/Navigation";
import Services from './components/Services/Services';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <Navigation />
      <Banner />
      <Services />
    </div>
  );
}

export default App;
