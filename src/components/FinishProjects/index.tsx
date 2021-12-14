import Link from 'next/link';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AiOutlineCode } from 'react-icons/ai';
import SectionTitle from '../SectionTitle';
import ProjectItem from './ProjectItem';

import { Container } from './styles';

function FinishProjects() {
  return (
    <Container>
      <SectionTitle title="Últimos projetos" />

      <section>
        <ProjectItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          img="https://user-images.githubusercontent.com/68359459/128270251-f4050d70-c53d-4c98-9ef3-73b7c52d6206.png"
        />
        <ProjectItem
          title="Projeto 02"
          type="Website"
          slug="teste"
          img="https://user-images.githubusercontent.com/68359459/128270251-f4050d70-c53d-4c98-9ef3-73b7c52d6206.png"
        />
        <ProjectItem
          title="Projeto 03"
          type="Website"
          slug="teste"
          img="https://user-images.githubusercontent.com/68359459/128270251-f4050d70-c53d-4c98-9ef3-73b7c52d6206.png"
        />
      </section>
      <button type="button">
        <Link href="/projects">
          <a>
            Ver todos os projetos <AiOutlineCode />
          </a>
        </Link>
      </button>
    </Container>
  );
}

export default FinishProjects;
