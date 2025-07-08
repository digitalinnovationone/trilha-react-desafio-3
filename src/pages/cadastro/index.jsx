import React from 'react';
import {
  Container,
  LeftSide,
  RightSide,
  Title,
  SubTitle,
  Form,
  Input,
  Button,
  Terms,
  LoginText,
  Link
} from './styles';

const Cadastro = () => {
  return (
    <Container>
      <LeftSide>
        <Title>
          A plataforma para você aprender com experts,
          dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
        </Title>
      </LeftSide>
      <RightSide>
        <h3>Comece agora grátis</h3>
        <SubTitle>Crie sua conta e make the change_</SubTitle>
        <Form>
          <Input type="text" placeholder="Nome completo" />
          <Input type="email" placeholder="E-mail" />
          <Input type="password" placeholder="Password" />
          <Button>Criar minha conta</Button>
        </Form>
        <Terms>
          Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
        </Terms>
        <LoginText>
          Já tenho conta. <Link href="/">Fazer login</Link>
        </LoginText>
      </RightSide>
    </Container>
  );
};

export default Cadastro;
