import { useNavigate } from 'react-router-dom';
import React from 'react'

import logo from '../../assests/logo-dio.png';
import { Button } from '../Button';


import {
    BurscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper

} from './styles';

const Header = ({autenticado}) => {
    
    const navigate = useNavigate();
    const handleClickSignIn = () => {
        navigate('/login')
    }
    const handleClickRegister = () => {
        navigate('/register')
    }


    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da dio" />
                    {autenticado ? (
                        <>
                        <BurscarInputContainer>
                            <Input placeholder='Buscar...' />
                        </BurscarInputContainer>
                        <Menu href="#">Live Code</Menu>
                        <Menu href="#">Global</Menu>
                        </>
                    ) : null} 
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4" />
                    ) : (
                        <>
                        <MenuRight href="/">Home</MenuRight>
                        <Button tittle="Entrar" onClick={handleClickSignIn}/>
                        <Button tittle="Cadastrar" onClick={handleClickRegister}/>
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }