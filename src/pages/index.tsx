import { HomeContainer } from '../styles/HomeStyles';
import Profiency from '../components/Profiency';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import About from '../components/About';
import FinishProjects from '../components/FinishProjects';
import Know from '../components/Know';

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <About />
        <Profiency />
        <FinishProjects />
        <Know />
      </main>
    </HomeContainer>
  );
}
