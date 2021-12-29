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
  date: string;
  thumbnail: string;
  created_at: string;
}
interface ProjectProps {
  projects: InterfaceProject[];
}

function FinishProjects({ projects }: ProjectProps) {
  const formattedProjects = projects.map(item => {
    const date = item.created_at?.split('/');
    const parsedDate = new Date(`${date[2]}-${date[1]}-${date[0]}`);
    return {
      ...item,
      created_at: parsedDate
    };
  });

  const ordenedProjects = formattedProjects
    .sort((a, b) => b.created_at.getTime() - a.created_at.getTime())
    .slice(0, 3);

  return (
    <Container>
      <SectionTitle title="Últimos projetos" />

      <section>
        {ordenedProjects.map(project => (
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
