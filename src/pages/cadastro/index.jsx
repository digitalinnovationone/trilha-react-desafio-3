import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md'
import { IoMdPerson } from 'react-icons/io';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";


import { Container, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, LoginButton, Row, Wrapper } from './styles';

const Cadastro = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors },setError } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try {
            if (!formData.nome || !formData.email || !formData.senha) {
                alert('Por favor, preencha todos os campos.');
                return;
            }
            
            const { data: existingUsers } = await api.get('/users');
            const userExists = existingUsers.some(user => user.email === formData.email);

            if (userExists) {
                // Define o erro no campo email
                setError('email', {
                    type: 'manual',
                    message: 'Email já cadastrado'
                });
                return; // Interrompe o cadastro
            }

            // Se o email não existir, cadastra o novo usuário
            const { data } = await api.post('/users', {
                nome: formData.nome,
                email: formData.email,
                senha: formData.senha,
            });

            if (data.id) {
                // Redireciona para a página de login
                navigate('/login');
                return;
            }

            alert('Erro ao criar usuário, tente novamente.');
        } catch (e) {
            console.log(e);
            alert('Ocorreu um erro durante o cadastro.');
        }
    };

    console.log('errors', errors);

    const handleLogin = () => {
        navigate('/login');
    };
    
    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Comece agora grátis</TitleLogin>
                        <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input placeholder="Nome completo" leftIcon={<IoMdPerson />} name="nome" control={control} />
                            <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" control={control} />
                            <Input type="password" placeholder="Senha" leftIcon={<MdLock />} name="senha" control={control} />
                            <Button title="Criar minha conta" variant="secondary" type="submit" />
                        </form>
                <SubtitleLogin>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubtitleLogin>
                <Row>
                    <EsqueciText>Já tenho conta.</EsqueciText>
                    <LoginButton onClick={handleLogin}>Fazer login</LoginButton> 
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Cadastro }