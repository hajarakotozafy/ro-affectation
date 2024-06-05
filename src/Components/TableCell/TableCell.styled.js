import styled from "styled-components";

export const TableCellStyle = styled.div`
    width: 36px;
    height: 36px;
    background: ${props => props.color ? props.color : "white"};
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;    
    font-weight: 500;
    position: relative;
    overflow: hidden;
    transition: 0.3s ease;
    &::before{
        position: absolute;
        content: "";
        width: 1px;
        height: 60px;
        transform: translate(-50%,-50%) rotate(45deg);
        top: 50%;
        left: 50%;
        background: #000;
        display: ${props=>props.color==='hsl(0, 80%, 60%)'?'block': 'none'};
    }
`