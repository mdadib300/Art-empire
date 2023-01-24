import React from 'react';
import Banner from './components/Banner/Banner';
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <Navigation />
      <Banner />
    </div>
  );
}

export default App;
