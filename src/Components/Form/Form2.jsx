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
            <Form onSubmit={(e) => SubmitForm2(e, affectationData.nbAff*affectationData.nbAff, dispatch, affectationData)}>
                <FormTitle>Affectations initiales</FormTitle>
                <Form2Control>
                    {generateMatrixInputs(affectationData.nbAff)}
                </Form2Control>
                <BtnContainer>
                    <div className="radio-btn">
                        <div className="radio-control">
                            <input type="radio" name="choice" value="min" id='min'/> <label for='min'>MIN</label>
                        </div>
                        <div className="radio-control">
                            <input type="radio" name="choice" value="max" id='max'/> <label for='max'>MAX</label>  
                        </div>
                    </div>
                    {/* <span>Résoudre :</span> */}
                    <Button onClick={() => setActive(!active)}>Résoudre</Button>
                </BtnContainer>
            </Form>
        </FormWrapper>
    )
}

export default Form2;