import React, { useRef, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';

import { Container, AnimationContainer, Content, Background } from './styles';

import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import validate from '../../validations/SignUp';

import { useToast } from '../../hooks/toast';
import api from '../../services/api';

interface SignUPParams {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(async (data: SignUPParams): Promise<
    void
  > => {
    const errors = await validate(data);

    if (errors) {
      formRef.current?.setErrors(errors);
    } else {
      try {
        await api.post('users', {
          name: data.name,
          email: data.email,
          password: data.password,
        });

        addToast({
          type: 'success',
          title: 'Cadastro realizado',
          content:
            'Seu cadastro foi realizado com sucesso, você ja pode fazer logon no sistema',
        });

        history.push('/');
      } catch (error) {
        addToast({
          type: 'error',
          title: 'Falha no cadastro',
          content: 'Não foi possível realizar seu cadastro no sistema.',
        });
      }
    }
  }, []);

  return (
    <Container>
      <Background />
      <AnimationContainer>
        <Content>
          <img src={logo} alt="GoBarber" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <Button type="submit">Cadastrar</Button>
          </Form>
          <Link to="/">
            <FiArrowLeft />
            Voltar para o logon
          </Link>
        </Content>
      </AnimationContainer>
    </Container>
  );
};

export default SignUp;
