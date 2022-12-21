import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    min-height: 93.8vh;
    padding-inline: 0.5rem;
    display: flex;
    align-items: center;
    background-color: var(--bg-light);
    @media screen and (max-width:48em) {
        align-items: flex-start;
    }
`;

export const BoxRegister = styled.div`
    width: 92%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    h2{
        max-width: 25ch;
        border-top: 10px solid;
        border-image-source: linear-gradient(90deg, rgb(132, 70, 172), transparent 30%);
        border-image-slice: 1;
        font-size: clamp(2rem, 2.5vw, 3rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-700);
        color: var(--clr-wt);
    }
    @media screen and (max-width:48em) {
        width: 95%;
        margin-top: 3rem;
        flex-direction: column;
        gap: 2rem;
        h2{
            max-width: 65ch;
            font-weight: var(--fw-400);
        }
    }
    @media screen and (max-width:36em) {
        h2{
            display: none;
        }
    }
`;

export const BoxTxt = styled.div`
    display: flex;
    flex-direction: column;
    h3{
        border-top: 10px solid;
        border-image-source: linear-gradient(90deg, rgb(132, 70, 172), transparent 30%);
        border-image-slice: 1;
        font-size: clamp(2rem, 2.5vw, 3rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-700);
        color: var(--clr-wt);
    }
    @media screen and (max-width:48em) {
        width: 100%;
    }
`;

export const Acc = styled.p`
    font-size: clamp(1rem, 1.2vw, 1.5rem);
    font-family: var(--ff-primary);
    font-weight: var(--fw-400);
    color: var(--clr-wt); 
    opacity: .9;
    &:nth-child(2){
        margin-block: 2rem;
    }
    &:nth-child(4){
        max-width: 35ch;
        margin-block-start: 3rem;
    }
    &:nth-child(5){
        margin-block-start: 0.5rem;
    }
    &:nth-child(5) a{
        font-weight: var(--fw-700);
        color: var(--clr-gr);
        text-decoration: none;
    }
    @media screen and (max-width:48em) {
        &:nth-child(2){
            margin-block: 1rem;
        }
        &:nth-child(4){
            max-width: 100%;
            margin-block-start: 1rem;
        }
    }
`;