import Header from '../../components/Header';
import ProjectsItems from '../../components/ProjectsItems';
import { ProjectContainer } from '../../styles/ProjectStyles';

export default function Projects() {
  return (
    <ProjectContainer>
      <Header />
      <main className="container">
        <ProjectsItems
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://user-images.githubusercontent.com/68359459/128270251-f4050d70-c53d-4c98-9ef3-73b7c52d6206.png"
        />
        <ProjectsItems
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://user-images.githubusercontent.com/68359459/128270251-f4050d70-c53d-4c98-9ef3-73b7c52d6206.png"
        />
        <ProjectsItems
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://user-images.githubusercontent.com/68359459/128270251-f4050d70-c53d-4c98-9ef3-73b7c52d6206.png"
        />
        <ProjectsItems
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://user-images.githubusercontent.com/68359459/128270251-f4050d70-c53d-4c98-9ef3-73b7c52d6206.png"
        />
      </main>
    </ProjectContainer>
  );
}
