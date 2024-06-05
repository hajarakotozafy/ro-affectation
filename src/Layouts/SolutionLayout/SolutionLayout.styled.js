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
    .reinit-container{
        display: flex;
        justify-content: flex-end;
        padding: 8px 24px;
    }
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
    .B{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        font-size: 20px;
        span{
            font-weight: 800;
        }
    }
`

export const GraphContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    span{
        margin-left: 16px;
        font-size: 24px;
        font-weight: 800;
    }
`

export const SolutionPopup = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 99999999999;
    animation: animatePopup 0.5s ease;
    @keyframes animatePopup {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
    &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: #000;
        opacity: 0.3;
        z-index: 99999999999;
    }
    display: flex;

    .solution-container{
        background: #fff;
        z-index: 999999999999;
        margin: auto;
        padding: 16px 56px;
        border-radius: 12px;
        text-align: center;
        & > div{
            display: flex;
            align-items: center;
            justify-content: center;
            span{
                font-size: 24px;
                font-weight: 600;
            }
        }
        & > h2 {
            font-size: 24px;
            font-weight: 800;
            border-bottom: 1px solid rgba(0,0,0,0.3);
        }
        button{
            margin-top: 16px;
        }
    }
`

export const Fleche = styled.div`
    display: flex;
    align-items: center;
    padding-right: 24px;
    p{
        padding: 12px 8px;
        position: relative;
        background: #E0E9F0;
        display: flex;
        align-items: center;
        // height: 32px;
        &::before{
            position: absolute;
            content: '';
            top: 50%;
            right: -35%;
            width: 48px;
            aspect-ratio: 1;
            background: #E0E9F0;
            transform: translate(-50%, -50%) rotate(45deg);
            z-index: -1;
        }
    }
`