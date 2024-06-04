import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { useForm } from "react-hook-form";
import { Container, Column, Title, Wrapper, TitleLogin, SubtitleLogin, TermoText, TemContaText } from './styles'

const Cadastro = () => {
    
    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    
    const onSubmit = async (data) => {
        try{
        //TODO
        }catch(e){
            //TODO: HOUVE UM ERRO
        }
    };

    return <Container>
        <Column>
            <Title>
                A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Title>
        </Column>
        <Column>
            <Wrapper>
                <TitleLogin>Comece agora grátis</TitleLogin>
                <SubtitleLogin>Crie sua conta e make the change_</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="Nome completo" leftIcon={<MdPerson />} name="nome" control={control} />
                    {errors.nome && <span>E-mail é obrigatório</span>}
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />} name="senha" control={control} />
                    {errors.senha && <span>Senha é obrigatório</span>}
                    <Button title="Criar minha conta" variant="secondary" type="submit" />
                </form>
                <Column>
                    <TermoText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</TermoText>
                    <TemContaText>Já tenho conta. <strong style={{color: '#23DD7A'}}>Fazer login</strong></TemContaText>
                </Column>
            </Wrapper>
        </Column>
    </Container>
}

export { Cadastro }