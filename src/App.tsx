import { Header } from './pages/Header';
import { Intro } from './pages/Intro';
import { Benefits } from './pages/Benefits';
import { Places } from './pages/Places';
import { Tours } from './pages/Tours';
import { Top } from './pages/Top';
import { Videos } from './pages/Videos';
import { Footer } from './pages/Footer';

export const App = () =>
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

export default App;
