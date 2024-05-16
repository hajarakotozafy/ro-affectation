import TableCell from "../Components/TableCell";

export const GenerateTableCells = (cellNb, aff) => {
    const cellsToShow = [];
    for(let i = 0; i < cellNb; i++){
        cellsToShow.push(<TableCell value={aff[i].value} color={aff[i].color}/>)
    }

    return cellsToShow;
}