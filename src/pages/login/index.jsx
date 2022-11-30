import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { useForm } from "react-hook-form";
import { Container, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Row, Wrapper, Span } from './styles';
import { api } from "../../services/api.js";

const schema = yup.object({
    email: yup.string().email('Email não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
}).required();

const Login = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const onSubmit = async formData => {
        try {
            const { data } = await api.get(`users?email${formData.email}&senha=${formData.password}`)
            if (data.length === 1) {
                navigate('/feed')
                console.log(data)
            } else {
                alert('Email ou senha inválidos')
            }
        }
        catch (e) {
            alert('Houve um erro, tente novamente')
        }
    }

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
                        <Input name="email"  type='email' errorMessage={errors.email?.message} placeholder="E-mail" leftIcon={<MdEmail />} control={control}/>
                        <Input name="password" autocomplete="current-password" type="password" errorMessage={errors.password?.message} placeholder="Senha" leftIcon={<MdLock />} control={control} />
                        <Button title="Entrar" variant="secondary" type="submit" />
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }