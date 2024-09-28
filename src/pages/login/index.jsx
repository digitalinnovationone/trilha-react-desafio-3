import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';
import { useForm } from "react-hook-form";
import { Container, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Row, Wrapper } from './styles';
import { yupResolver } from "@hookform/resolvers/yup";
import { string, object } from "yup";

const schema = object({
    email: string().email("Email inválido").required("Campo obrigatório"),
    senha: string().min(6, "A senha deve conter pelo menos 6 dígitos").required("Campo obrigatório")
})

const Login = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
        resolver: yupResolver(schema)
    });

    const onSubmit = async (formData) => {
        try {
            const { data } = await api.get(`/users?email=${formData.email}&senha=${formData.senha}`);
            
            if (data.length && data[0].id) {
                navigate('/feed');
                return;
            }

            alert('Usuário ou senha inválido');
        } catch (error) {
            console.error('Erro ao realizar login:', error);
        }
    };



    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Faça seu cadastro</TitleLogin>
                <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                    type="email"
                    placeholder="E-mail"
                    leftIcon={<MdEmail />}
                    name="email" 
                    control={control}
                    errorMessage={errors?.email?.message}
                    />
                    <Input
                    type="password"
                    placeholder="Senha"
                    leftIcon={<MdLock />} 
                    name="senha"
                    control={control}
                    errorMessage={errors?.senha?.message}
                    />
                    <Button title="Entrar" variant="secondary" type="submit"/>
                </form>
                <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText href="/signin">Criar Conta</CriarText>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }