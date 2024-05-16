import React, { useContext } from 'react';
import InputNumber from '../Input';
import { BtnContainer, Form, Form1Control, FormTitle, FormWrapper } from './Form.styled';
import { Button } from '../Button';
import { AffectationContext } from '../../Contexts/AffectationContexts';
import { SubmitForm1 } from '../../Services/SubmitForm1';

const Form1 = () => {
    const { affectationData, dispatch } = useContext(AffectationContext);
    return (
        <FormWrapper>
            <Form onSubmit={(e) => SubmitForm1(e, dispatch)}>
                <FormTitle>Renseignements générales</FormTitle>
                <Form1Control>
                    <label>Nombre d'affectations:</label>
                    <InputNumber name="nbAff" disabled={false}/>
                </Form1Control>
                <BtnContainer>
                    <Button>Suivant</Button>
                </BtnContainer>
            </Form>
        </FormWrapper>       
    )
}

export default Form1;