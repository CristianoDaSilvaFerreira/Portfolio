import { Container } from './styles';

interface BannerProjectProps {
  title: string;
  type: string;
  imgUrl: string;
}

function BannerProject({ title, type, imgUrl }: BannerProjectProps) {
  return (
    <Container imgUrl={imgUrl} data-aos="zoom-in-right">
      <div className="overlay" />
      <section data-aos="fade-up-right">
        <h1>{title}</h1>
        <h2>{type}</h2>
      </section>
    </Container>
  );
}

export default BannerProject;
