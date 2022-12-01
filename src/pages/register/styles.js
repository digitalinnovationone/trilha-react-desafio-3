import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 88px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
`

export const Wrapper = styled.div`
    max-width: 335px;
`

export const Column = styled.div`
    margin:0 auto;
    flex: 1;
`

export const LoginTextDiv = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #FFFF;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 400px;
    margin-bottom: 140px;
    line-height: 44px;
    color: #FFFF;
`

export const TitleRegister = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 43.58px;
`

export const SubTitleRegister = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;
`

export const PoliticasText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24.5px;
    color: #C8C8C8;
    margin-top: 20px;
`

export const MakeItGreen = styled.a`
    padding-left: 5px;
    color: #23DD7A;
    text-decoration: none;
    &:hover {
        cursor: pointer;
    }
`