import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';

function FormContact() {
  return (
    <Container data-aos="fade-up" data-aos-anchor-placement="center-center">
      <SectionTitle
        title={
          <>
            Precisa dos
            <br />
            meus serviços?
          </>
        }
        description={
          <>
            Preencha o formulário abaixo que
            <br />
            irei retornar em breve!
          </>
        }
      />

      <Form />
    </Container>
  );
}

export default FormContact;
