import styled from 'styled-components';

export const SideBarLayoutContainer = styled.div`
    position: fixed;
    right: 0;
    width: 380px;
    height: 100vh;
    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    background: #E0E9F0;
    transition: 0.3s ease;
    @media screen and (max-width: 750px){
        right: ${props => props.$active? '0': '-100%'};
        z-index: 999999;
        width: 100%;
    }
`

export const SideBarLayoutTitle = styled.div`
    position: sticky;
    top: 0;
    width: 100%;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button{
        padding: 8px 12px;
        border-radius: 12px;
        cursor: pointer;
        background: #fff;
        font-weight: 800;
        display: none;
        @media screen and (max-width: 750px){
            display: block;
        }
    }
`