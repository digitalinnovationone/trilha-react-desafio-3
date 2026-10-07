import React from 'react';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

const AVATAR_URL = 'https://avatars.githubusercontent.com/u/45184516?v=4';

const posts = [
    { id: 1, tempo: 'Há 8 minutos', curtidas: 10 },
    { id: 2, tempo: 'Há 15 minutos', curtidas: 24 },
    { id: 3, tempo: 'Há 32 minutos', curtidas: 7 },
    { id: 4, tempo: 'Há 45 minutos', curtidas: 31 },
    { id: 5, tempo: 'Há 1 hora', curtidas: 12 },
    { id: 6, tempo: 'Há 2 horas', curtidas: 45 },
    { id: 7, tempo: 'Há 3 horas', curtidas: 9 },
    { id: 8, tempo: 'Há 5 horas', curtidas: 18 },
    { id: 9, tempo: 'Há 8 horas', curtidas: 56 },
    { id: 10, tempo: 'Há 1 dia', curtidas: 73 }
];

const ranking = [
    { id: 1, nome: 'Pablo Henrique', image: AVATAR_URL, percentual: 72 },
    { id: 2, nome: 'Pablo Henrique', image: AVATAR_URL, percentual: 65 },
    { id: 3, nome: 'Pablo Henrique', image: AVATAR_URL, percentual: 45 },
    { id: 4, nome: 'Pablo Henrique', image: AVATAR_URL, percentual: 25 },
    { id: 5, nome: 'Pablo Henrique', image: AVATAR_URL, percentual: 15 }
];

const Feed = () => {
    return (
        <>
            <Header autenticado={true} />
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    {posts.map((post) => (
                        <Card key={post.id} {...post} />
                    ))}
                </Column>
                <Column flex={1}>
                    <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                    {ranking.map((user) => (
                        <UserInfo key={user.id} {...user} />
                    ))}
                </Column>
            </Container>
        </>
    );
};

export { Feed };
