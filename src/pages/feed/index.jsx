import React from 'react'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo nome="Aluno 1" image="https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg?w=740" percentual={25}/>
                <UserInfo nome="Aluno 2" image="https://img.freepik.com/vetores-premium/perfil-de-avatar-de-mulher-no-icone-redondo_24640-14042.jpg" percentual={65}/>
                <UserInfo nome="Aluno 3" image="https://img.freepik.com/vetores-premium/perfil-de-avatar-de-mulher-no-icone-redondo_24640-14047.jpg" percentual={45}/>
                <UserInfo nome="Aluno 4" image="https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14049.jpg" percentual={72}/>
            </Column>
        </Container>
    </>
  )
}

export { Feed }; 
