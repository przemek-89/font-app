import Header from './components/molecules/Header';
import Footer from './components/molecules/Footer';
import HeroSection from './components/organisms/HeroSection';
import Boxes1Section from './components/organisms/Boxes1Section';
import Boxes2Section from './components/organisms/Boxes2Section';
import FontChangeSection from './components/organisms/FontChangeSection';

import './App.scss';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <HeroSection />
        <Boxes1Section />
        <Boxes2Section />
        <FontChangeSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
