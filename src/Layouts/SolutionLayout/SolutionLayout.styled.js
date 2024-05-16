import styled from 'styled-components';

export const SolutionLayoutContainer = styled.div`
    width: calc(100% - 380px);
    min-height: 100vh;
    
    @media screen and (max-width: 750px){
        width: 100%;
    }
`

export const SolutionLayoutTitle = styled.div`
    position: sticky;
    top: 0;
    width: 100%;
    padding: 16px;
    -webkit-box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    z-index: 99999;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button{
        padding: 8px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        display: none;
        cursor: pointer;
        @media screen and (max-width: 750px){
            display: block;
        }
    }
`
    
export const SolutionsLayoutTab = styled.div`
    min-height: calc(100vh - 55px);
    padding: 16px;
`

export const StepsContainer = styled.div`
    padding: 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 32px;
    @media screen and (max-width: 750px){
        justify-content: center;
    }
`