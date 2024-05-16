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
`