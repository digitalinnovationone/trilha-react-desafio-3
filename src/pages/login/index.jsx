import { useNavigate } from 'react-router-dom';
import { MdEmail, MdLock } from "react-icons/md";

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { api } from '../../services/api';
import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from './styles';

const schema = yup.object({
    email: yup.string().email('Este email não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
    }).required();


const Login = () => {
    const navigate = useNavigate();

    const handleClickRegister = () => {
        navigate('/Plataforma-Dio/register')
    }

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onSubmit',
    });

    const onSubmit = async formData => {
        try{
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if (data.length === 1){
                navigate('/Plataforma-Dio/feed');
            } else {
                alert('Email e/ou senha inválidos.');
            }
        }catch{
            alert("Houve um erro, tente novamente.");
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
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail style={{color: '#8647AD'}}/>}/>
                            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock style={{color: '#8647AD'}}/>}/>
                            <Button tittle="Entrar" variant="secondary" type="submit" />
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText onClick={handleClickRegister}>Criar conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export { Login }