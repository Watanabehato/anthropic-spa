import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureGrid from './components/FeatureGrid';
import Footer from './components/Footer';
import {
  COPYRIGHT,
  FOOTER_COLUMNS,
  HERO_CONTENT,
  MODEL_CARDS,
  NAV_LINKS,
} from './data/content';

function App(): JSX.Element {
  return (
    <div className="min-h-screen">
      <Navbar links={NAV_LINKS} />
      <main>
        <HeroSection content={HERO_CONTENT} />
        <FeatureGrid
          eyebrow="THE CLAUDE 3 FAMILY"
          title="Three models, one standard for safety."
          models={MODEL_CARDS}
        />
      </main>
      <Footer columns={FOOTER_COLUMNS} copyright={COPYRIGHT} />
    </div>
  );
}

export default App;
