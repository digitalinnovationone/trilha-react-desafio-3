import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { api } from '../../services/api';
import { useForm } from "react-hook-form";
import { Container, Title, Column, TitleLogin, SubtitleLogin, Text, LoginText, Row, Wrapper } from './register.styles';
import { IRegister } from "./register.types";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'


const schema = yup.object({
    name: yup.string().required('Campo Obrigatório'),
    email: yup.string().email('Email não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
}).required();

const Register = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors } } = useForm<IRegister>({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const onSubmit = async (formData: IRegister) => {
        try {
            const { data } = await api.get(`/users?name=${formData.name}&email=${formData.email}&senha=${formData.password}`);

              if (data) {
                // await api.post(`/users?name=${formData.name}&email=${formData.email}&senha=${formData.password}`)
                navigate('/feed')
                return
            } else {
                alert('Não foi possível realizar o seu cadastro, verifique suas informações e tente novamente.')
            }
        } catch (e) {
            alert('Houve um erro, tente novamente')
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
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubtitleLogin>crie sua conta e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="name" type="name" errorMessage={errors.name?.message} placeholder="Nome Completo" leftIcon={<MdPerson />} control={control} />
                        <Input name="email" type='email' errorMessage={errors.email?.message} placeholder="E-mail" leftIcon={<MdEmail />} control={control} />
                        <Input name="password" autoComplete="current-password" type="password" errorMessage={errors.password?.message} placeholder="Senha" leftIcon={<MdLock />} control={control} />
                        <Button title="CRIAR MINHA CONTA GRÁTIS" variant="secondary" type="submit" />
                    </form>
                    <Row>
                        <Text>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</Text>
                    </Row>
                    <Row>
                        <LoginText onClick={() => navigate('/login')}>Fazer Login</LoginText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}


export { Register }