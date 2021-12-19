import Link from 'next/link';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AiOutlineRightCircle } from 'react-icons/ai';
import { ProjectContainer } from './styles';

interface ProjectProps {
  title: string;
  type: string;
  slug: string;
  img: string;
}

export default function ProjectItem({ title, type, slug, img }: ProjectProps) {
  return (
    <ProjectContainer imgUrl={img}>
      <section>
        <div className="overlay" />
        <div className="text">
          <h1># {title}</h1>
          <h2>- {type}</h2>
        </div>
      </section>

      <button type="button">
        <Link href={`/projects/${slug}`}>
          <a>
            Veja mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </ProjectContainer>
  );
}
