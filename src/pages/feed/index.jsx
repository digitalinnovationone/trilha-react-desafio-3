import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Column, Container, Title, TitleHighlight } from './styles';


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
                </Column>
                <Column flex={1}>
                    <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                    <UserInfo percentual={25} nome="Paulo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v=4"/>
                    <UserInfo percentual={37} nome="Paulo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v=4"/>
                    <UserInfo percentual={45} nome="Paulo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v=4"/>
                    <UserInfo percentual={78} nome="Paulo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v=4"/>
                    <UserInfo percentual={2} nome="Paulo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v=4"/>
                </Column>
            </Container>
        </>
    )
}

export { Feed }