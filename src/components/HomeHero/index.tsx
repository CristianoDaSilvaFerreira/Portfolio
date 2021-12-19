/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picute from '../../assets/personal.webp';

function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <img src={picute} alt="Minha foto" data-aos="fade-up-right" />
      <div>
        <TextContainer>
          <h1>Hello</h1>
          <h2>World</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span>
            <span className="unicode"> {'\u007B'}</span>
            <div>
              Nome: <span className="blue">Cristiano</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Ferreira</span>
            </div>
            <span className="unicode">{'\u007D'}</span>
          </CodeItem>
          <CodeItem>
            <span className="purple">Cargo</span>
            <span className="unicode"> {'\u007B'}</span>
            <div>
              Função: <span className="blue">Dev Front-End</span>
            </div>
            <div>
              Endereço: <span className="blue">Nova Iguaçu - RJ</span>
            </div>
            <span className="unicode"> {'\u007D'}</span>
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
