import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { HomeContainer } from '../styles/HomeStyles';
import Profiency from '../components/Profiency';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import About from '../components/About';
import FinishProjects from '../components/FinishProjects';
import Know from '../components/Know';
import FormContact from '../components/FormContact';
import Footer from '../components/Footer';
import { getPrismicClient } from '../services/prismic';

interface InterfaceProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface HomeProps {
  projects: InterfaceProject[];
}

export default function Home({ projects }: HomeProps) {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <About />
        <Profiency />
        <FinishProjects projects={projects} />
        <Know />
        <FormContact />
      </main>

      <Footer />
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'project')],
    { orderings: '[document.fisrt_publication_date desc]' }
  );

  const projects = projectResponse.results.map(project => ({
    slug: project.uid,
    title: project.data.title,
    type: project.data.type,
    description: project.data.description,
    link: project.data.link.url,
    thumbnail: project.data.thumbnail.url
  }));

  return {
    props: {
      projects
    },
    revalidate: 172800
  };
};
