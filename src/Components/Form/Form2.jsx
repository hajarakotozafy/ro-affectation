import React, { useContext } from 'react';
import { FormWrapper, Form, FormTitle, BtnContainer, Form2Control } from './Form.styled';
import { AffectationContext } from '../../Contexts/AffectationContexts';

import { Button } from '../Button';
import { generateMatrixInputs } from '../../Services/GenerateMatrixInputs';

import { SubmitForm2 } from '../../Services/SubmitForm2';

const Form2 = ({active, setActive}) => {
    const { affectationData, dispatch } = useContext(AffectationContext);
    return(
        <FormWrapper>
            <Form onSubmit={(e) => SubmitForm2(e, affectationData.nbAff*affectationData.nbAff, dispatch)}>
                <FormTitle>Affectations initiales</FormTitle>
                <Form2Control>
                    {generateMatrixInputs(affectationData.nbAff)}
                </Form2Control>
                <BtnContainer>
                    <span>Résoudre :</span>
                    <Button onClick={() => setActive(!active)}>en MIN</Button>
                    <Button>en MAX</Button>
                </BtnContainer>
            </Form>
        </FormWrapper>
    )
}

export default Form2;