import React from 'react';
import { SideBarLayoutContainer, SideBarLayoutTitle } from './SideBarLayout.styled'
import Form from '../../Components/Form';


const SideBarLayout = () => {
    return (
        <SideBarLayoutContainer>
            <SideBarLayoutTitle>
                <h3>Affectation MIN MAX</h3>
            </SideBarLayoutTitle>
            <Form/>
        </SideBarLayoutContainer>
    )
}

export default SideBarLayout;