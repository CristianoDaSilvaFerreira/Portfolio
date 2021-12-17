import BannerProject from '../../../components/BannerProject';
import Header from '../../../components/Header';
import { ProjectContainer } from '../../../styles/ProjectStyles';

export default function Project() {
  return (
    <ProjectContainer>
      <Header />
      <BannerProject
        title="Projeto 01"
        type="Website"
        imgUrl="https://user-images.githubusercontent.com/68359459/128270251-f4050d70-c53d-4c98-9ef3-73b7c52d6206.png"
      />

      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nulla
          rem, enim cum beatae odit. Cumque eveniet totam numquam, molestiae
          magni voluptatem in qui dolorem.
        </p>
        <button type="button">
          <a href="#">Ver projeto online</a>
        </button>
      </main>
    </ProjectContainer>
  );
}
