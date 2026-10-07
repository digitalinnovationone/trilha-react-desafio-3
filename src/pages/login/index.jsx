import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdEmail, MdLock } from 'react-icons/md';
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
    EsqueciText,
    CriarText,
    Row,
    Wrapper,
    ErrorMessage
} from './styles';

const Login = () => {
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
            const { data } = await api.get(
                `/users?email=${encodeURIComponent(formData.email)}&senha=${encodeURIComponent(
                    formData.senha
                )}`
            );

            if (data.length && data[0].id) {
                navigate('/feed');
                return;
            }

            setApiError('Usuário ou senha inválido');
        } catch {
            setApiError('Não foi possível conectar ao servidor. Tente novamente.');
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
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
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
                                rules={{ required: 'Senha é obrigatória' }}
                                aria-invalid={!!errors.senha}
                                aria-describedby={errors.senha ? 'senha-error' : undefined}
                            />
                            {errors.senha && (
                                <ErrorMessage id="senha-error">{errors.senha.message}</ErrorMessage>
                            )}
                            {apiError && <ErrorMessage role="alert">{apiError}</ErrorMessage>}
                            <Button
                                title={loading ? 'Entrando...' : 'Entrar'}
                                variant="secondary"
                                type="submit"
                                disabled={loading}
                            />
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText onClick={() => navigate('/cadastro')}>Criar Conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    );
};

export { Login };
