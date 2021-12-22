import { useState } from 'react';
import toast from 'react-hot-toast';
import { sendContactMail } from '../../services/sendMail';
import theme from '../../styles/theme';
import { FormContainer, Input, TextArea } from './styles';

export default function Form() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!nome || !email || !mensagem) {
      toast('Por favor, preencha todos os campos para enviar sua mensagem!', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
      return;
    }

    try {
      setLoading(true);
      await sendContactMail(nome, email, mensagem);
      setNome('');
      setEmail('');
      setMensagem('');

      toast('Mensagem enviada cm sucess!!', {
        style: {
          background: theme.secondary,
          color: '#fff'
        }
      });
    } catch (error) {
      toast(
        'Ocorreu um erro ao tentar enviar sua mensagem, verifique os campos e tente novamente!',
        {
          style: {
            background: theme.error,
            color: '#fff'
          }
        }
      );
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
