import React from 'react';
import Form1 from './Form1';
import { FormContainer } from './Form.styled';
import Form2 from './Form2';

const Form = () => {
    return(
        <FormContainer>
            <Form1/>
            <Form2/>
        </FormContainer>
    )
}

export default Form;