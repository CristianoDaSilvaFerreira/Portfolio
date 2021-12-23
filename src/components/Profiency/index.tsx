import SectionTitle from '../SectionTitle';
import ProfiencyItem from './ProfiencyItem';
import { Container } from './styles';

function Profiency() {
  return (
    <Container data-aos="fade-up">
      <SectionTitle title="Sobre" description="acadêmico & cursos" />

      <section data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <ProfiencyItem
          year="Julho 2020"
          title="Graduação"
          description="Bacharel em Sistema de Informações"
          institution="Estácio de Sá"
        />
        <ProfiencyItem
          year="Fevereiro 2021"
          title="HTML Web Developer"
          description="Curso de aprefeiçoamento através do Bootcamp"
          institution="Digital Innovation One"
          hour="27 horas"
        />
        <ProfiencyItem
          year="Maio 2021"
          title="Desenvolvimento Web"
          description="Curso online de Desenvolvimento Web"
          institution="Udemy - Jorge Sant'Ana, Jamilto Damasceno e Udemy"
          hour="109 horas"
        />
        <ProfiencyItem
          year="Maio 2021"
          title="JavaScript"
          description="Curso online de JavaScript"
          institution="Hcode e Udemy"
          hour="38.5 horas"
        />
      </section>
    </Container>
  );
}

export default Profiency;
