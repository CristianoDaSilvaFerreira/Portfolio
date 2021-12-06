import SectionTitle from '../SectionTitle';
import ProfiencyItem from './ProfiencyItem';
import { Container } from './styles';

function Profiency() {
  return (
    <Container>
      <SectionTitle title="Sobre" description="acadêmico & cursos" />

      <section>
        <ProfiencyItem
          year="2020"
          title="Graduação"
          description="Bacharel em Sistema de Informações"
          institution="Estácio de Sá"
        />
        <ProfiencyItem
          year="2020"
          title="Graduação"
          description="Bacharel em Sistema de Informações"
          institution="Estácio de Sá"
        />
        <ProfiencyItem
          year="2020"
          title="Graduação"
          description="Bacharel em Sistema de Informações"
          institution="Estácio de Sá"
        />
        <ProfiencyItem
          year="2020"
          title="Graduação"
          description="Bacharel em Sistema de Informações"
          institution="Estácio de Sá"
        />
      </section>
    </Container>
  );
}

export default Profiency;
