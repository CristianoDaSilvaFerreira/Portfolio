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
            tecnologia, desde de criança. Busquei na graduação de tecnologia
            aprimorar esse conhecimento. Me apaixonei pelo o desenvolvimento
            Front-End. Na faculdade surgiu o interesse irresistível
            desenvolvimento, sendo assim à criação de site, aplicativos,
            padronização de bancos de dados, organização de projetos. A
            faculdade me ensinou de uma forma a ter uma habilidade de testa,
            acerta, errar e aprender com isso, e nunca desistir. <br />
            <span className="unicode">{'\u007D'}</span> <br />
            <span className="purple">.person</span>
            <span className="unicode"> {'\u007B'}</span> <br />
            Acredito que um dos meus maiores ponto forte seja a forma de
            trabalhar alegre, comunicativo, e a forma interessante que tenho em
            aprender novas formas de trabalho. Proativo, procurando novas fontes
            de adquirir conhecimento e experiência necessárias para se tornar um
            bom profissional. Formado em Sistemas de Informações, tento buscar
            forma de exercer de forma satisfatória o melhor trabalho possível.
            Comprometimento pelo o trabalho, procurando fazer tudo com
            excelência <br />
            <span className="unicode">{'\u007D'}</span>
          </p>
        </div>
      </div>
      {/* <button type="button">
        <a download="dev-frontend.png">Download CV</a>
      </button> */}
    </AboutContainer>
  );
}
