import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import {Button} from '../../components/Button';
import {Header} from '../../components/Header';
import {Input} from '../../components/Input';
import { Column, ErrorText, Container, FazerLogin, JaTenhoConta, Row, SubTitleCadastro, Title, TitleCadastro, Wrapper } from './styles';

//https://www.react-hook-form.com
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { api } from '../../services/api';

const schema = yup.object({
    user: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo Obrigatório'),
    email: yup.string().email('Email não é válido').required('Campo Obrigatório'),
    password: yup.string().min(6, 'No mínimo 6 caracteres').required('Campo Obrigatório'),  
}).required();

const Cadastro = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const onSubmit = async formData => {
        try{
            const { data } = await api.get(`users?name=${formData.user}&email=${formData.email}&senha=${formData.password}`) ? (
                alert("Usuário já está cadastrado!")
            ) : (
                //TODO acrescentar novo usuario
                await api.post('/users', formData)
                .then(()=>{
                    navigate('/login');
                    })
                )
        } catch(err) {
            alert("Houve um erro! Tente novamente", err)
        }
    };

    const handleClickSignIn = () => {
        navigate('/login');
    }

    return (
        <>
            <Header/>
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias
                        e entrar mais rapido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleCadastro>Comece agora grátis</TitleCadastro>
                        <SubTitleCadastro>Crie sua conta e make the change._</SubTitleCadastro>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="user" errorMessage={errors?.user?.message} control={control} placeholder="Nome Completo" leftIcon={<MdPerson/>}/>
                            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail/>}/>
                            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                            <Button title="Criar minha conta" variant='secondary' type="submit"/>
                        </form>
                        <br/>
                        <br/>
                        <Column>
                            <SubTitleCadastro>
                                Ao clicar em "criar minha conta gratis",
                                declaro que aceito as políticas de 
                                Privacidade e os termos de Uso da DIO.
                            </SubTitleCadastro>
                            <Row>
                                <JaTenhoConta>Já tenho conta.</JaTenhoConta>
                                <FazerLogin onClick={handleClickSignIn}>Fazer login</FazerLogin>
                            </Row>
                        <br/>
                        <br/>
                        </Column>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export { Cadastro };