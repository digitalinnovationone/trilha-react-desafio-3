import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import {
  Container,
  Title,
  Column,
  TitleLogin,
  SubtitleLogin,
  Row,
  Wrapper,
  GreenText
} from "./styles";

const Register = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.post("/users", formData);
      if (data.id) {
        navigate("/login");
        return;
      }
      alert("Erro ao cadastrar usuário");
    } catch (e) {
      console.error("Houve um erro", e);
      alert("Houve um erro ao tentar cadastrar");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
            <Row> </Row>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="Nome completo"
                name="name"
                control={control}
                leftIcon={<MdPerson />}
              />
              {errors.name && <span>Nome é obrigatório</span>}
              <Input
                placeholder="E-mail"
                name="email"
                control={control}
                leftIcon={<MdEmail />}
              />
              {errors.email && <span>Email é obrigatório</span>}
              <Input
                type="password"
                placeholder="Password"
                name="senha"
                control={control}
                leftIcon={<MdLock />}
              />
              {errors.senha && <span>Senha é obrigatória</span>}
              <Button
                title="Criar minha conta"
                variant="secondary"
                type="submit"
              />
            </form>
            <Row>
              <p>
                Ao clicar em "criar minha conta grátis", declaro que aceito as
                Políticas de Privacidade e os Termos de Uso da DIO.
              </p>
            </Row>
            <Row>
              <Link to="/login">Já tenho conta. <GreenText >Fazer login</GreenText></Link>
                          
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Register;
