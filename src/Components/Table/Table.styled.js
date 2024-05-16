import styled from "styled-components";

export const TableContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const HorizontalH = styled.div`
    height: 36px;
    width: ${({aff})=> 36*(aff+2)+2}px;
    display: flex;
    align-items: center;
    justify-content: center;
`
    
export const AffContainer = styled.div`
    width: ${({aff})=> 36*(aff)+2}px;
    height: ${({aff})=> 36*(aff)+2}px;
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #74A0AD;
`

export const AffCont = styled.div`
    display: flex;
    .verticalH{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`