import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 88px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Title = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 24px;
    line-height: 25px;
    color: #FFFF;
`

export const TitleHighlight = styled.span`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 24px;
    line-height: 25px;
    color: #FFFFFF70;
`
export const Column = styled.div`
    flex: ${({flex}) => flex};
    padding: 40px;
`
