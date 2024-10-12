import { useNavigate } from "react-router-dom";
import { MdPerson, MdEmail, MdLock } from "react-icons/md";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { api } from "../../services/api";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import {
  Container,
  Title,
  Column,
  TitleLogin,
  SubtitleLogin,
  MsgPequena,
  JatemLog,
  Link,
  Row,
  Wrapper,
} from "./styles";

// Schema de validação
const validationSchema = Yup.object().shape({
  nome: Yup.string().required("Nome completo é obrigatório"),
  email: Yup.string().email("Email inválido").required("Email é obrigatório"),
  senha: Yup.string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("Senha é obrigatória"),
});

const Cadastro = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (formData) => {
    try {
      await api.post("/users", formData);
      navigate("/feed");
    } catch (e) {
      console.error("Erro ao cadastrar:", e);

      alert("Ocorreu um erro ao cadastrar. Tente novamente.");
    }
  };

  const handleLoginRedirect = () => {
    navigate("/login");
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
            <SubtitleLogin>Crie sua conta e faça a diferença!</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="Nome completo"
                leftIcon={<MdPerson />}
                name="nome"
                control={control}
                errorMessage={errors.nome?.message}
              />

              <Input
                placeholder="E-mail"
                leftIcon={<MdEmail />}
                name="email"
                control={control}
                errorMessage={errors.email?.message}
              />

              <Input
                type="password"
                placeholder="Senha"
                leftIcon={<MdLock />}
                name="senha"
                control={control}
                errorMessage={errors.senha?.message}
              />

              <Button
                title="Criar minha conta"
                variant="secondary"
                type="submit"
              />
            </form>
            <Row>
              <SubtitleLogin>
                Ao clicar em "criar minha conta grátis", declaro que aceito as
                Políticas de Privacidade e os Termos de Uso da DIO.
              </SubtitleLogin>
            </Row>
            <Link onClick={handleLoginRedirect}>
              <MsgPequena>Já tenho conta.</MsgPequena>
              <JatemLog> Fazer login</JatemLog>
            </Link>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Cadastro };
