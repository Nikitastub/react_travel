import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { Benefits } from './components/Benefits';
import { Places } from './components/Places';
import { Tours } from './components/Tours';
import { Top } from './components/Top';
import { Videos } from './components/Videos';
import { Footer } from './components/Footer';

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
