import styled from 'styled-components';

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: #000;
    // border: 3px solid red;
`

export const FormWrapper = styled.div`
    // border: 2px solid green;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 16px;
    margin: 0;
    background: #ffffff;
    margin: 0 16px;
    border-radius: 4px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    // border: 1px solid yellow;
`

export const FormTitle = styled.p`
    font-size: 18px;
    font-weight: 600;
    // border: 1px solid black;
`


export const Form1Control = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    label{
        width: 70%;
    }
`

export const Form2Control = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    .ligne{
        display: flex;
        flex-direction: row;
        gap: 8px;
    }
`

export const BtnContainer = styled.div`
    margin-top: 8px;
    padding-top: 16px;
    border-top: 1px solid #74A0AD;
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    align-items: center;
    .radio-btn{
        padding: 0 8px;
        display: flex;
        gap: 16px;
        font-weight: 600;
        .radio-control{
            cursor: pointer;
        }
        label{
            margin-left: 4px;
            cursor: pointer;
        }
        input{
            cursor: pointer;

        }
    }
`