import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
// import { BsBootstrapFill } from 'react-icons/bs';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTypescript, SiNextdotjs } from 'react-icons/si';
import SectionTitle from '../SectionTitle';
import KnowItem from './KnowItem';
import { Container } from './styles';

function Know() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" data-aos="fade-up" />
      <section data-aos="flip-left">
        <KnowItem title="HTML" icon={<AiFillHtml5 />} />
        <KnowItem title="CSS" icon={<FaCss3Alt />} />
        <KnowItem title="JavaScript" icon={<IoLogoJavascript />} />
        <KnowItem title="TypeScript" icon={<SiTypescript />} />
        <KnowItem title="NextJs" icon={<SiNextdotjs />} />
        {/* <KnowItem title="Booststrap" icon={<BsBootstrapFill />} /> */}
        <KnowItem title="React" icon={<FaReact />} />
      </section>
    </Container>
  );
}

export default Know;
