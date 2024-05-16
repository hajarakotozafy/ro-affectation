import { TableCellStyle } from "./TableCell.styled";

const TableCell = ({color, value}) => {
    return (
        <TableCellStyle color={color}>
            {value}
        </TableCellStyle>
    )
}

export default TableCell;