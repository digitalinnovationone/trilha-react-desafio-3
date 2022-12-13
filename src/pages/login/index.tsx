import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { useForm } from "react-hook-form";
import { Container, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Row, Wrapper} from './styles';
import { api } from "../../services/api";
import { IFormData } from "./types";

const schema = yup.object({
    email: yup.string().email('Email não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
}).required();

const Login = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const onSubmit = async (formData :IFormData) => {
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
                    <TitleLogin>Faça seu login</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email"  type='email' errorMessage={errors.email?.message} placeholder="E-mail" leftIcon={<MdEmail />} control={control}/>
                        <Input name="password" autoComplete="current-password" type="password" errorMessage={errors.password?.message} placeholder="Senha" leftIcon={<MdLock />} control={control} />
                        <Button title="Entrar" variant="secondary" type="submit" />
                    </form>
                    <Row>
                        <EsqueciText onClick={()=> navigate('/')}>Esqueci minha senha</EsqueciText>
                        <CriarText onClick={()=> navigate('/register')}>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }