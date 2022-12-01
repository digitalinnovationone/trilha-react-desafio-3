import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    max-width: 275px;
    height: 30px;
    border-bottom: 1px solid #3B3450;

    display: flex;
    align-items: center;
    margin-bottom: 15px;
`

export const IconContariner = styled.div`
    margin-right: 10px;
`

export const InputText = styled.input`
    background-color: transparent;
    color: #FFFF;
    width: 100%;
    border: 0;
    height: 31px;
    border-bottom: 1px solid #3B3450;

    &:-webkit-autofill,
    :-webkit-autofill:hover, 
    :-webkit-autofill:focus, 
    :-webkit-autofill:active{
        -webkit-text-fill-color: #999;
        -webkit-box-shadow: 0 0 0 30px #1e192c inset !important;
    }

    &:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
        border-bottom: 1px solid;
        border-image-slice: 1;
        border-image-source: linear-gradient(to left, rgb(134, 71, 173) 70%, #3B3450 100%);
    }
    caret-color: white;
`

export const ErrorText = styled.p`
    color: #FF0000;
    font-size: 12px;
    margin: 5px 0px; 
`