import styled from 'styled-components';

export const SolutionLayoutContainer = styled.div`
    width: calc(100% - 380px);
    min-height: 100vh;
`

export const SolutionLayoutTitle = styled.div`
    position: sticky;
    top: 0;
    width: 100%;
    padding: 16px;
    -webkit-box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    z-index: 99999;
    background: #fff;
`
    
export const SolutionsLayoutTab = styled.div`
    min-height: calc(100vh - 55px);
    padding: 16px;
`

export const StepsContainer = styled.div`
    padding: 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`