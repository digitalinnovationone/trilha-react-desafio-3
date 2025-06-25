// src/pages/Cadastro/index.tsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import api from '../../services/api';
import {
  Container,
  ContentWrapper,
  FormSection,
  Title,
  Subtitle,
  Form,
  LoginLink,
  ImageSection,
  Image,
  Message,
} from './styles';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Cadastro: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();
  const password = watch('password', '');
  const [submissionMessage, setSubmissionMessage] = useState<{
    text: string;
    type: 'success' | 'error';
  } | null>(null);

  const onSubmit = async (data: FormData) => {
    setSubmissionMessage(null);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      const response = await api.post('/register', {
        name: data.name,
        email: data.email,
        password: data.password,
      });

      if (response.status === 201 || response.status === 200) {
        setSubmissionMessage({
          text: 'Cadastro realizado com sucesso!',
          type: 'success',
        });
        reset();
      } else {
        setSubmissionMessage({
          text: 'Erro ao cadastrar. Tente novamente.',
          type: 'error',
        });
      }
    } catch (error) {
      setSubmissionMessage({
        text: 'Erro de conexão ou servidor. Tente mais tarde.',
        type: 'error',
      });
    }
  };

  return (
    <Container>
      <ContentWrapper>
        <FormSection>
          <Title>Crie sua conta na DIO</Title>
          <Subtitle>
            Aprenda, conecte-se e acelere sua carreira em tecnologia.
          </Subtitle>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              placeholder="Nome Completo"
              {...register('name', {
                required: 'Nome é obrigatório',
                minLength: {
                  value: 3,
                  message: 'Nome deve ter no mínimo 3 caracteres',
                },
              })}
              error={errors.name?.message}
            />
            <Input
              type="email"
              placeholder="Email"
              {...register('email', {
                required: 'Email é obrigatório',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Email inválido',
                },
              })}
              error={errors.email?.message}
            />
            <Input
              type="password"
              placeholder="Senha"
              {...register('password', {
                required: 'Senha é obrigatória',
                minLength: {
                  value: 6,
                  message: 'Senha deve ter no mínimo 6 caracteres',
                },
              })}
              error={errors.password?.message}
            />
            <Input
              type="password"
              placeholder="Confirmar Senha"
              {...register('confirmPassword', {
                required: 'Confirmação de senha é obrigatória',
                validate: value =>
                  value === password || 'As senhas não coincidem',
              })}
              error={errors.confirmPassword?.message}
            />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
            </Button>
          </Form>
          {submissionMessage && (
            <Message color={submissionMessage.type}>
              {submissionMessage.text}
            </Message>
          )}
          <LoginLink>
            Já tem uma conta? <a href="#">Faça login</a>
          </LoginLink>
        </FormSection>
        <ImageSection>
          <Image src="https://via.placeholder.com/500" alt="DIO Cadastro" />
        </ImageSection>
      </ContentWrapper>
    </Container>
  );
};
