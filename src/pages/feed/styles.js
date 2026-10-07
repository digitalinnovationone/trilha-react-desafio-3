import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 120px auto 0;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
        margin-top: 48px;
    }
`;

export const Title = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #ffffff;
    margin-bottom: 24px;
`;

export const TitleHighlight = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #ffffff70;
    margin-bottom: 24px;
`;

export const Column = styled.div`
    flex: ${({ flex }) => flex};
    padding-right: 24px;

    @media (max-width: 768px) {
        padding-right: 0;
    }
`;
