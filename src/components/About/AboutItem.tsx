import { AboutContainer } from './styles';

export default function AboutItem() {
  return (
    <AboutContainer>
      <div>
        <h1>Conheça minha história</h1>
        <div>
          <p>
            <span className="purple">.sobre</span>
            <span className="unicode"> {'\u007B'}</span> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            perspiciatis, nesciunt illum tenetur libero asperiores accusamus,
            odit odit odit odit officiis consequuntur dolorum suscipit aut?
            facilis facilis ipsa ullam tempora facere ut saepe minima
            repudiandae vero, deleniti consequuntur doloremque voluptate eveniet
            similique rem eligendi id aut? Quaerat maiores error aliquid quidem
            quis numquam accusantium quibusdam officiis nam exercitationem,
            temporibus beatae voluptatum itaque molestias doloremque
            consectetur, eaque nulla suscipit. Rerum explicabo voluptates
            molestiae? Quis, tempora! Totam culpa nulla distinctio accusamus
            aliquid aliquam esse! Expedita, eum consequatur at omnis beatae,
            earum ducimus aliquam debitis explicabo, sequi est. Eveniet unde sed
            vero? Doloribus. <br />
            <span className="unicode">{'\u007D'}</span>
          </p>
        </div>
      </div>
      <button type="button">
        <a>Download CV</a>
      </button>
    </AboutContainer>
  );
}
