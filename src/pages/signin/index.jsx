import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';
import { yupResolver } from "@hookform/resolvers/yup";
import { string, object } from "yup";
import { useForm } from "react-hook-form";
import { Container, Title, Column, TitleSignin, SubtitleSignin, JaTenhoConta, AceiteTermos, LinkEstilizado, Wrapper } from './styles';

const schema = object({
    nomeCompleto: string().min(3, "O nome deve conter pelo menos 3 caracteres").required("Campo obrigatório"),
    email: string().email("Email inválido").required("Campo obrigatório"),
    senha: string().min(6, "A senha deve conter pelo menos 6 caracteres").required("Campo obrigatório")
})

const Signin = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
        resolver: yupResolver(schema)
    });

    const onSubmit = async (formData) => {
        try {
            await api.post('/users', formData);
            navigate("/feed")
            
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
        }
    }

    

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleSignin>Comece agora grátis</TitleSignin>
                <SubtitleSignin>Crie sua conta e make the change.</SubtitleSignin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                    placeholder="Nome completo"
                    leftIcon={<MdPerson />}
                    name="nomeCompleto" 
                    control={control}
                    errorMessage={errors?.nomeCompleto?.message}
                    />

                    <Input
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

                    <Button title="Criar minha conta" variant="secondary" type="submit"/>
                </form>
                <Column>
                    <AceiteTermos>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</AceiteTermos>
                    <JaTenhoConta>Já tenho conta. <LinkEstilizado href="/login">Fazer login</LinkEstilizado></JaTenhoConta>
                </Column>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Signin }