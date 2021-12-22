import { useState } from 'react';
import { sendContactMail } from '../../services/sendMail';
import { FormContainer, Input, TextArea } from './styles';

export default function Form() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setLoading(true);
      await sendContactMail(nome, email, mensagem);
      setNome('');
      setEmail('');
      setMensagem('');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <FormContainer
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      onSubmit={handleSubmit}
    >
      <Input
        placeholder="Nome"
        type="text"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />
      <Input
        placeholder="E-mail"
        type="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <TextArea
        placeholder="Mensangem"
        value={mensagem}
        onChange={({ target }) => setMensagem(target.value)}
      />
      <button type="submit" disabled={loading}>
        ENVIAR
      </button>
    </FormContainer>
  );
}
