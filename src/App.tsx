import React from 'react';
import { Header } from './pages/Header';
import { Intro } from './pages/Intro';
import { Benefits } from './pages/Benefits';
import { Places } from './pages/Places';
import { Tours } from './pages/Tours';
import { Top } from './pages/Top';
import { Videos } from './pages/Videos';
import { Footer } from './pages/Footer';

function App() {
  return (
  <>
    <Header />
    <div className="main">
      <Intro />
      <Benefits />
      <Places />
      <Tours />
      <Top />
      <Videos />
    </div>
    <Footer />
  </>
  );
}

export default App;
