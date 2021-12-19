import Link from 'next/link';
import { Container } from './styles';

interface ProjecItemProps {
  title: string;
  type: string;
  imgUrl: string;
  slug: string;
}

function ProjecsItems({ title, type, imgUrl, slug }: ProjecItemProps) {
  return (
    <Container imgUrl={imgUrl} data-aos="fade-up" data-aos-duration="3000">
      <Link href={`projects/${slug}`}>
        <a>
          <div className="overlay" />
          <section>
            <h1>{title}</h1>
            <h2>{type}</h2>
          </section>
        </a>
      </Link>
    </Container>
  );
}

export default ProjecsItems;
