import React, { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { Container, AnimationContainer, Content, Background } from './styles';

import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import validate from '../../validations/SignIn';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: { email: string; password: string }): Promise<void> => {
      const errors = await validate(data);

      if (errors) {
        formRef.current?.setErrors(errors);
      } else {
        try {
          await signIn({ email: data.email, password: data.password });
        } catch (error) {
          addToast({
            type: 'error',
            title: 'Ocorreu um erro.',
            content: 'Ocorreu um erro ao logar, cheque suas crendenciais.',
          });
        }
      }
    },
    [signIn, addToast],
  );

  return (
    <Container>
      <AnimationContainer>
        <Content>
          <img src={logo} alt="GoBarber" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu logon</h1>
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <Button type="submit">Entrar</Button>
            <a href="forgot">Esqueci minha senha</a>
          </Form>
          <Link to="/signup">
            <FiLogIn />
            Criar conta
          </Link>
        </Content>
      </AnimationContainer>
      <Background />
    </Container>
  );
};

export default SignIn;
