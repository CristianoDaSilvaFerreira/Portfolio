/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picute from '../../assets/personal.webp';

function HomeHero() {
  return (
    <Container>
      <img src={picute} alt="Minha foto" />
      <div>
        <TextContainer>
          <h1>Hello</h1>
          <h2>World</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Cristiano</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Ferreira</span>
            </div>
          </CodeItem>
          <CodeItem>
            <span className="purple">Cargo</span> {'\u007B'}
            <div>
              Função: <span className="blue">Dev Front-End</span>
            </div>
            <div>
              Endereço: <span className="blue">Nova Iguaçu - RJ</span>
            </div>
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;