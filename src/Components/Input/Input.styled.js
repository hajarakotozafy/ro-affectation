import styled from 'styled-components';

export const Input = styled.input`
    font-weight: 500;
    width: 36px;
    height: 36px;
    border-radius: 4px;
    outline: none;
    border: 1px solid grey;
    background: #ffffff;
    color: grey;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
        display: none;
    }
    &:disabled{
        background: grey;
        color: #000;
    }
`