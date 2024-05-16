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

export const encadrage = (matrixWithZero, matrixLength) => {
    const matrixDegree = Math.sqrt(matrixLength);
    const matrixToCadre = [];
    for(let i = 0; i < matrixLength; i++){
        matrixToCadre.push({
            value: matrixWithZero[i],
            encadre: false,
            bare: false,
            marquee: {
                status: true,
                nb : 0
            },
            color: ''
        })
    }

    const matrixSeparatePerRow = []
    for(let i = 0; i < matrixDegree; i++){
        matrixSeparatePerRow.push([])
    }

    let j = 0;
    for(let i = 0; i < matrixLength; i++){
        let newRow = []

        if((i+1)%matrixDegree==0){
            matrixSeparatePerRow[j].push(matrixWithZero[i])
            j++
        }else{
            matrixSeparatePerRow[j].push(matrixWithZero[i])
        }
        newRow = []
    }

    let stop = isEncadree(matrixToCadre)
    let indexExclue = []
    let ligneExclue = []
    while(!stop){
        // console.log("recadrage")
        let ligne = -1;
        let minZero = matrixDegree + 1
        for(let i = 0; i < matrixSeparatePerRow.length; i++){
            let ZeroNumber = 0
            if(ligneExclue.includes(i)){
                continue;
            }
            for(let j = 0; j < matrixSeparatePerRow[i].length; j++){
                if(matrixSeparatePerRow[i][j]==0){
                    ZeroNumber += 1;
                }
            }
            if(ZeroNumber < minZero && ZeroNumber != 0){
                minZero = ZeroNumber;
                ligne = i
            }
        }
        ligneExclue.push(ligne)
        // coordonnées j du zéro à encadrer
        let colonne = -1
        for(let i = 0; i < matrixSeparatePerRow[ligne].length; i++){
            if(matrixSeparatePerRow[ligne][i] == 0 && !matrixToCadre[coordinatesToindex(ligne, i, matrixDegree)].encadre && !matrixToCadre[coordinatesToindex(ligne, i, matrixDegree)].bare){
                colonne = i;
                matrixToCadre[coordinatesToindex(ligne, colonne, matrixDegree)].encadre = true;
                matrixToCadre[coordinatesToindex(ligne, colonne, matrixDegree)].color = 'hsl(120, 60%, 70%)';
                break;
            }
        }

        
        for(let i = 0; i < matrixSeparatePerRow[ligne].length; i++){
        
            if(i!=colonne && matrixSeparatePerRow[ligne][i]==0 && !matrixToCadre[coordinatesToindex(ligne, i, matrixDegree)].encadre && !matrixToCadre[coordinatesToindex(ligne, i, matrixDegree)].bare ){
                const index = coordinatesToindex(ligne, i, matrixDegree)
                matrixToCadre[index].bare = true;
                matrixToCadre[index].color = 'hsl(0, 80%, 60%)';
            }
        }

        for(let i = 0; i < matrixSeparatePerRow.length; i++){

            if(i!=ligne && matrixSeparatePerRow[i][colonne]==0 && !matrixToCadre[coordinatesToindex(i, colonne, matrixDegree)].encadre && !matrixToCadre[coordinatesToindex(i, colonne, matrixDegree)].bare){
                const index = coordinatesToindex(i, colonne, matrixDegree)
                matrixToCadre[index].bare = true;
                matrixToCadre[index].color = 'hsl(0, 80%, 60%)';
            }
        }
        
        // console.log(isEncadree(matrixToCadre))
        stop = isEncadree(matrixToCadre);
    }
    return matrixToCadre;
}

const coordinatesToindex = (i,j,nbAff) => {
    return i*nbAff+j
}

const isEncadree = (matrixToCadre) => {
    for(let i = 0; i < matrixToCadre.length; i++){
        if(matrixToCadre[i].value == 0 && matrixToCadre[i].encadre == false && matrixToCadre[i].bare == false){
            return false;
        }
    }
    return true;
}