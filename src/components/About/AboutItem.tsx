import { AboutContainer } from './styles';

export default function AboutItem() {
  return (
    <AboutContainer>
      <div>
        <h1>Conheça minha história</h1>
        <div>
          <p>
            <span className="purple">.about</span>
            <span className="unicode"> {'\u007B'}</span> <br />
            Uma pessoa apaixonada pelo o conhecimento, inovação, criação e
            tecnologia, desde de criança. Busquei na graduação de Sistema
            Informações aprimorar esse conhecimento. Havendo desenvolvido uma
            paixão pelo Front-End <br />
            <span className="unicode">{'\u007D'}</span> <br />
            <span className="purple">.person</span>
            <span className="unicode"> {'\u007B'}</span> <br />
            Acredito que um dos meus maiores ponto forte seja a forma de
            trabalhar alegre, comunicativo e o interesse que tenhi em aprender
            novas coisas e a forma de trabalha. Proativo, procura a forma de
            aquirir o conhecimento e a experiência necessárias para ser um
            excelente profissiona de forma com o comprometimento pelo o que
            faço. <br />
            <span className="unicode">{'\u007D'}</span>
          </p>
        </div>
      </div>
      <button type="button">
        <a href="/dev-frontend.pdf" target="_blank">
          Download CV
        </a>
      </button>
    </AboutContainer>
  );
}
