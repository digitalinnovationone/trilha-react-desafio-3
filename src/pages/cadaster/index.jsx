import { MdEmail, MdLock, MdAccountCircle} from 'react-icons/md';
import { useNavigate  } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { api } from '../../services/api';

import { Container, Title, Column, TitleLogin, SubtitleLogin, JaTenhoContaText, LogarText, Row, Wrapper, DescricaoText } from './styles';

const Cadaster = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try{
            const {data} = await api.post(`/users`, formData);
            
            if(data && data !== undefined){
                alert('Conta criada com sucesso!');
                navigate('/login') 
                return
            }
        }catch(e){
            alert('Ops... algo deu errado. Tente novamente mais tarde. Erro: ', e)
        }
    };

    console.log('errors', errors);

    return (
        <>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>

            <Column>
                <Wrapper>
                    <TitleLogin>Comece agora grátis</TitleLogin>

                    <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input type="nome" placeholder="Nome completo" leftIcon={<MdAccountCircle />} name="nome" control={control} />
                        <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                        {errors.email && <span>E-mail é obrigatório</span>}
                        <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                        {errors.senha && <span>Senha é obrigatório</span>}
                        <Button title="Criar minha conta" variant="secondary" type="submit"/>
                    </form>

                    <Row>
                        <DescricaoText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</DescricaoText>
                    </Row>

                    <Row>
                        <JaTenhoContaText>Já tenho conta.</JaTenhoContaText>
                        <LogarText>Fazer login</LogarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>
    )
}

export { Cadaster }