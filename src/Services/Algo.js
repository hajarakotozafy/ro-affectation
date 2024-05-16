export const minimumOfColumn = (matrixElem, matrixLength, initialMatrix) => {
    const initialMinCol = []
    const minCol = []
    for(let i=0;i<matrixElem;i++){
        initialMinCol.push([])
    }
    
    for(let i=0; i<matrixElem; i++){
        for(let j=0; j<matrixLength;j++){
            if(j%matrixElem==i){
                initialMinCol[i].push(initialMatrix[j])
            }
        }
    }
    
    for(let i=0; i<matrixElem; i++){
        minCol.push(Math.min(...initialMinCol[i]))
    }

    return {initialMinCol, minCol }
}

export const zeroPerColumn = (initialMinCol, minCol, matrixElem) => {
    const matrixWithZeroPerColumn = initialMinCol
    let matrixColWithZero
    for(let i=0; i<matrixElem; i++){
        for(let j=0; j<matrixElem; j++){
            matrixWithZeroPerColumn[i][j] -= minCol[i]
        }
    }
    matrixColWithZero = colToMatrix(initialMinCol, matrixElem)
    return { matrixWithZeroPerColumn, matrixColWithZero }
}

const colToMatrix = (mat, elem) => {
    let val = []
    for(let i = 0; i<elem; i++){
        for(let j = 0; j<elem; j++){
            val.push(mat[j][i])
        }
    }
    return val
}

export const minimumOfRow = (matrixElem, matrixLength, matrixWithZeroPerColumn) => {
    const initialMinRow = []
    const minRow = []
    for(let i = 0; i < matrixElem; i++){
        initialMinRow.push([])
    }
    let j=0
    for(let i = 0; i < matrixLength; i++){
        if((i+1)%matrixElem==0){
            initialMinRow[j].push(matrixWithZeroPerColumn[i])
            j++
        }else{
            initialMinRow[j].push(matrixWithZeroPerColumn[i])
        }
    }

    for(let i = 0; i<matrixElem; i++){
        minRow.push(Math.min(...initialMinRow[i]))
    }

    return {initialMinRow, minRow}
}

export const zeroPerRow = (initialMinRow, minRow, matrixElem) => {
    const matrixWithZeroPerRow = initialMinRow
    let matrixRowWithZero
    for(let j=0; j<matrixElem; j++){
        for(let i=0; i<matrixElem; i++){
            matrixWithZeroPerRow[i][j] -= minRow[i]
        }
    }

    matrixRowWithZero = rowToMatrix(initialMinRow, matrixElem)
    return { matrixWithZeroPerRow, matrixRowWithZero }
}

const rowToMatrix = (mat, elem) => {
    let val = []
    for(let i = 0; i<elem; i++){
        for(let j = 0; j<elem; j++){
            val.push(mat[i][j])
        }
    }
    return val
}