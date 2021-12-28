import Link from 'next/link';
import { AiOutlineCode } from 'react-icons/ai';
import SectionTitle from '../SectionTitle';
import ProjectItem from './ProjectItem';
import { Container } from './styles';

interface InterfaceProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}
interface ProjectProps {
  projects: InterfaceProject[];
}

function FinishProjects({ projects }: ProjectProps) {
  return (
    <Container>
      <SectionTitle title="Últimos projetos" />

      <section>
        {projects.slice(0, 4).map(project => (
          <ProjectItem
            key={project.slug}
            img={project.thumbnail}
            title={project.title}
            type={project.type}
            slug={project.slug}
          />
        ))}
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
