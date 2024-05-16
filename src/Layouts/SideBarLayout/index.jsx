import React from 'react';
import { SideBarLayoutContainer, SideBarLayoutTitle } from './SideBarLayout.styled'
import Form from '../../Components/Form';


const SideBarLayout = ({active, setActive}) => {
    return (
        <SideBarLayoutContainer active={active}>
            <SideBarLayoutTitle>
                <h3>Affectation MIN MAX</h3>
                <button onClick={()=>setActive(!active)}>X</button>
            </SideBarLayoutTitle>
            <Form active={active} setActive={setActive}/>
        </SideBarLayoutContainer>
    )
}

export default SideBarLayout;