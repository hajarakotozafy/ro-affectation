import React, { useContext } from 'react';
// import { GenerateTableCells } from "../../Services/GenerateTableCells";
import { TableContainer, AffContainer, HorizontalH, AffCont } from "./Table.styled";
import TableCell from "../TableCell";


const Table = ({HTitle,VTitle,affectation, values, BottomTitle, RightTitle}) => {
    
    const generateHead = (nbAff, titles) => {
        const row = []
        for(let i = 0; i < nbAff; i++){
            row.push(<TableCell key={i} value={titles?titles[i].value:""} color={titles?titles[i].color: ""}/>)
        }
        return row;
    }
    const GenerateTableCells = (cellNb, aff) => {
        const cellsToShow = [];
        for(let i = 0; i < cellNb; i++){
            cellsToShow.push(<TableCell key={i} value={aff[i].value} color={aff[i].color}/>)
        }
    
        return cellsToShow;
    }

    return (
        <TableContainer>
            <HorizontalH $aff={affectation}>
                <TableCell value="" color=""/>
                {generateHead(affectation,HTitle)}
                <TableCell value="" color=""/>
            </HorizontalH>

            <AffCont>
                <div className="verticalH">
                    {generateHead(affectation,VTitle)}
                </div>
                <AffContainer $aff={affectation}>
                    {GenerateTableCells(affectation*affectation, values)}
                </AffContainer>
                <div className="verticalH" style={{'display': 'flex', 'flexDirection': 'column'}}>
                {generateHead(affectation, RightTitle)}
                </div>
            </AffCont>

            <HorizontalH $aff={affectation}>
                <TableCell value="" color=""/>
                {generateHead(affectation, BottomTitle)}
                <TableCell value="" color=""/>
            </HorizontalH>
        </TableContainer>
    )
}

export default Table;