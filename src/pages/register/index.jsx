import { MdEmail, MdLock } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { api } from '../../services/api';
import { Column, Container, LoginTextDiv, MakeItGreen, PoliticasText, SubTitleRegister, Title, TitleRegister, Wrapper } from './styles';

const schema = yup.object({
    name: yup.string().required('Campo obrigatório'),
    email: yup.string().email('Este email não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatório'),
  }).required();

const Register = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onSubmit',
    });

    const onSubmit = async formData => {
        try{
            const { data } = await api.get(`users?email=${formData.email}`);
            if (data.length !== 1) {
                console.log(api);
                await api.post('/users', { id: api.length, name: formData.name, email: formData.email, senha: formData.password });
                console.log(api);
                navigate('/login');
            } else {
                alert("Não foi possível criar sua conta com este email, talvez você já esteja cadastrado.");
            }
        }catch{
            alert("Houve um erro, tente novamente.");
        }
    }


    const handleClickSignIn = () => {
        navigate('/login')
    }


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
                        <TitleRegister>Comece agora grátis</TitleRegister>
                        <SubTitleRegister>Crie sua conta e make the change._</SubTitleRegister>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="name" control={control} errorMessage={errors?.name?.message} placeholder="Nome completo" leftIcon={<IoPersonSharp style={{color: '#8647AD'}}/>}/>
                            <Input name="email" control={control} errorMessage={errors?.email?.message} placeholder="Seu melhor @e-mail" leftIcon={<MdEmail style={{color: '#8647AD'}}/>}/>
                            <Input name="password" control={control} errorMessage={errors?.password?.message} placeholder="Senha" type="password" leftIcon={<MdLock style={{color: '#8647AD'}}/>}/>
                            <br />
                            <Button tittle="Criar minha conta" variant="secondary" type="submit" />
                        </form>
                        <Column>
                            <PoliticasText>Ao clicar em "criar minha conta grátis", declaro que aceito as 
                                Políticas de Privacidade e os Termos de Uso da DIO.</PoliticasText>
                            <LoginTextDiv>
                                Já tenho conta.<MakeItGreen onClick={handleClickSignIn}>Fazer login.</MakeItGreen>
                            </LoginTextDiv>
                        </Column>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export { Register }