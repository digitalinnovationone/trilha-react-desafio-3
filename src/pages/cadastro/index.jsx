import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdPerson, MdEmail, MdLock } from 'react-icons/md';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { useForm } from 'react-hook-form';

import {
    Container,
    Title,
    Column,
    TitleLogin,
    SubtitleLogin,
    TermsText,
    LoginText,
    Row,
    Wrapper,
    ErrorMessage
} from './styles';

const Cadastro = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState(null);

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange'
    });

    const onSubmit = async (formData) => {
        setApiError(null);
        setLoading(true);

        try {
            await api.post('/users', {
                name: formData.nome,
                email: formData.email,
                senha: formData.senha
            });

            navigate('/login');
        } catch {
            setApiError('Não foi possível criar a conta. Tente novamente.');
        } finally {
            setLoading(false);
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
                        <TitleLogin>Comece agora grátis</TitleLogin>
                        <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                placeholder="Nome completo"
                                leftIcon={<MdPerson />}
                                name="nome"
                                control={control}
                                rules={{ required: 'Nome é obrigatório' }}
                                aria-invalid={!!errors.nome}
                                aria-describedby={errors.nome ? 'nome-error' : undefined}
                            />
                            {errors.nome && (
                                <ErrorMessage id="nome-error">{errors.nome.message}</ErrorMessage>
                            )}
                            <Input
                                placeholder="E-mail"
                                leftIcon={<MdEmail />}
                                name="email"
                                control={control}
                                rules={{
                                    required: 'E-mail é obrigatório',
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: 'E-mail inválido'
                                    }
                                }}
                                aria-invalid={!!errors.email}
                                aria-describedby={errors.email ? 'email-error' : undefined}
                            />
                            {errors.email && (
                                <ErrorMessage id="email-error">{errors.email.message}</ErrorMessage>
                            )}
                            <Input
                                type="password"
                                placeholder="Senha"
                                leftIcon={<MdLock />}
                                name="senha"
                                control={control}
                                rules={{
                                    required: 'Senha é obrigatória',
                                    minLength: {
                                        value: 6,
                                        message: 'Senha deve ter ao menos 6 caracteres'
                                    }
                                }}
                                aria-invalid={!!errors.senha}
                                aria-describedby={errors.senha ? 'senha-error' : undefined}
                            />
                            {errors.senha && (
                                <ErrorMessage id="senha-error">{errors.senha.message}</ErrorMessage>
                            )}
                            {apiError && <ErrorMessage role="alert">{apiError}</ErrorMessage>}
                            <Button
                                title={loading ? 'Criando conta...' : 'Criar minha conta'}
                                variant="secondary"
                                type="submit"
                                disabled={loading}
                            />
                        </form>
                        <TermsText>
                            Ao clicar em “Criar minha conta grátis”, você afirma que leu e aceitou
                            os Termos de Uso e Política de Privacidade.
                        </TermsText>
                        <Row>
                            <TermsText>Já tem conta?</TermsText>
                            <LoginText onClick={() => navigate('/login')}>Faça login</LoginText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    );
};

export { Cadastro };
