import React, { useState } from 'react';
import { Header } from './pages/Header';
import { Intro } from './pages/Intro';
import { Benefits } from './pages/Benefits';
import { Places } from './pages/Places';
import { Tours } from './pages/Tours';
import { Top } from './pages/Top';
import { Videos } from './pages/Videos';
import { Footer } from './pages/Footer';
import { Modal } from './components/Modal';
import { LoginForm } from './components/LoginForm';

function App() {
  const [modal, setModal] = useState(false);
 
  return (
  <>
    {modal && <Modal title="Sign In" onClose={() => setModal(false)}>
    <LoginForm switchModal={() => setModal(false)}/>
    </Modal>}
    <Header switchModal={() => setModal(true)}/>
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
