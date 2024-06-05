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
            raille: 1,
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
                if(matrixSeparatePerRow[i][j]==0 && !matrixToCadre[coordinatesToindex(i, j, matrixDegree)].bare){
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

export const isSolutionFinale = (matrixToCadre) => {
    const zeroEncadreColonne = []
    const zeroEncadreLigne = []
    for(let i=0;i<Math.sqrt(matrixToCadre.length);i++){
        zeroEncadreColonne.push([])
    }
    
    for(let i=0; i<Math.sqrt(matrixToCadre.length); i++){
        for(let j=0; j<matrixToCadre.length;j++){
            if(j%Math.sqrt(matrixToCadre.length)==i){
                zeroEncadreColonne[i].push(matrixToCadre[j].encadre?matrixToCadre[j].value: -1)
            }
        }
    }

    for(let i=0 ; i<zeroEncadreColonne.length; i++){
        if(!zeroEncadreColonne[i].includes(0)){
            return false
        }
    }

    for(let i = 0; i < Math.sqrt(matrixToCadre.length); i++){
        zeroEncadreLigne.push([])
    }
    
    let j=0
    
    for(let i = 0; i < matrixToCadre.length; i++){
        if((i+1)%Math.sqrt(matrixToCadre.length)==0){
            zeroEncadreLigne[j].push(matrixToCadre[i].encadre?matrixToCadre[i].value: -1)
            j++
        }else{
            zeroEncadreLigne[j].push(matrixToCadre[i].encadre?matrixToCadre[i].value: -1)
        }
    }

    for(let i = 0; i<zeroEncadreLigne.length; i++){
        if(!zeroEncadreLigne[i].includes(0)){
            return false
        }
    }

    return true;
}

export const groupedByColumn = (assignementNb, matrixLength, matrix) => {
    const res = []
    for(let i=0;i<assignementNb;i++){
        res.push([])
    }
    
    for(let i=0; i<assignementNb; i++){
        for(let j=0; j<matrixLength;j++){
            if(j%assignementNb==i){
                res[i].push(matrix[j])
            }
        }
    }
    return res
}

export const groupedByRow = (assignementNb, matrixLength, matrix) => {
    const res = []
    for(let i = 0; i < assignementNb; i++){
        res.push([])
    }
    let j=0
    for(let i = 0; i < matrixLength; i++){
        if((i+1)%assignementNb==0){
            res[j].push(matrix[i])
            j++
        }else{
            res[j].push(matrix[i])
        }
    }
    return res;
}

export const findRowWithNonZeroEncadre = (matrix) => {
    const res = [];
    let trouve = true;
    for(let i = 0; i < matrix.length; i++){
        matrix[i].forEach(el => {
            if(el.encadre === true){
                trouve = false
            }
        })
        if(trouve){
            res.push(i)
        }
        trouve = true;
    }
    return res;
}

/**
 * searchInto = {
 *  range: "column",
 *  fromRangeId: 1
 * }
 */

export const marquage = (searchInto, groupedByCol, groupedByRow, stop, res) => {
    if(stop){
        // return res;
    }
    else{
        stop = true; 
        let range = []
        let zeroToSearch = ''
        let rangeToMarque = []
        switch(searchInto.range){
            case 'column':
                searchInto.range = 'row';
                range = groupedByRow;
                zeroToSearch = 'encadre'
                break;
            case 'row':
                searchInto.range = 'column';
                range = groupedByCol;
                zeroToSearch = 'bare'
                break;
        }
        
        for(let i = 0; i < range.length; i++){
            if(range[i][searchInto.fromRangeId][zeroToSearch] === true){
                rangeToMarque.push(i)
            }
        }
        // console.log(rangeToMarque)


        rangeToMarque.forEach(el => {
            stop = false;
            searchInto.fromRangeId = el
            res.push({
                range: searchInto.range,
                id: el    
            })
            marquage(searchInto, groupedByCol, groupedByRow, stop, res);
        })

        // for(let i = 0; i < range.length; i++){
        //     if(range[i][searchInto.fromRangeId][zeroToSearch] === true){
        //         stop = false;
        //         searchInto.fromRangeId = i;
        //         res.push({
        //             range: searchInto.range,
        //             id: i
        //         })
        //     }

        //     return marquage(searchInto, groupedByCol, groupedByRow, stop, res);
        // }
    }
}

export const raillure = (marquage, matrix) => {
    const row = []
    const col = []
    marquage.forEach(el => {
        if(el.range == 'row' && !row.includes(el.id)){
            row.push(el.id)
        }
    })
    marquage.forEach(el => {
        if(el.range == 'column' && !col.includes(el.id)){
            col.push(el.id)
        }
    })

    row.forEach(el => {
        let inf = (el+1)*Math.sqrt(matrix.length) - Math.sqrt(matrix.length);

        for(let i = inf; i < inf + Math.sqrt(matrix.length); i++){
            matrix[i].raille = 0
        }
    })

    col.forEach(el => {
        let inf = el;
        for(let i = inf; i < matrix.length; i = i + Math.sqrt(matrix.length)){
            matrix[i].raille += 1
        }
    })

    return colorRaillure(matrix);
}

export const colorRaillure = (matrix) => {
    matrix.forEach(el=> {
        if(el.raille !== 0){
            el.color = 'yellow'
        } else el.color =''
    })
    return matrix;
}

export const addPlus = (marquage, matrix) => {
    const row = []
    const col = []
    marquage.forEach(el => {
        if(el.range == 'row'){
            row.push(el.id)
        }
    })
    marquage.forEach(el => {
        if(el.range == 'column'){
            col.push(el.id)
        }
    })
    const rightTitle = []
    for(let i = 0; i < Math.sqrt(matrix.length); i++){
        let elem = {
            value: '',
            color: ''
        }
        rightTitle.push(elem)
    }

    row.forEach(el => {
        rightTitle[el].value += '+'
    })
    const bottomTitle = []
    for(let i = 0; i < Math.sqrt(matrix.length); i++){
        let elem = {
            value: '',
            color: ''
        }
        bottomTitle.push(elem)
    }

    col.forEach(el => {
        bottomTitle[el].value += '+'
    })

    let minMultiplicator = 1;
    rightTitle.forEach(el => {
        if(el.value.length > minMultiplicator) minMultiplicator = el.value.length
    })
    bottomTitle.forEach(el => {
        if(el.value.length > minMultiplicator) minMultiplicator = el.value.length
    })
    return {
        rightTitle: rightTitle,
        bottomTitle: bottomTitle,
        addPlusToTitle : true,
        minMultiplicator: minMultiplicator
    }
}

export const returnMinBeforeSubstitute = (matrixRaille) => {
    const min = {
        index: -1,
        value: Infinity
    }
    for(let i = 0; i < matrixRaille.length; i++){
        if(matrixRaille[i].raille === 0){
            if(min.value > matrixRaille[i].value){
                min.value = matrixRaille[i].value;
                min.index = i
            }
        }
    }

    matrixRaille[min.index].color = 'red';
    return {
        matrixRaille,
        min
    };
}

export const substitute = (matrixRaille, min) => {
    for(let i = 0; i < matrixRaille.length; i++){
        if(matrixRaille[i].raille === 0){
            matrixRaille[i].value -= min
        }else if(matrixRaille[i].raille === 2){
            matrixRaille[i].value += min
        }
    }

    return matrixRaille
}

export const FinalSolutionToGraph = (matrix) => {
    const groupedByRowVariable = groupedByRow(Math.sqrt(matrix.length), matrix.length, matrix)
    const solution = {}
    for(let i = 0; i < groupedByRowVariable.length; i++){
        for(let j = 0; j < groupedByRowVariable[i].length; j++){
            if(groupedByRowVariable[i][j].encadre === true){
                let key = `a${i+1}b${j+1}`
                // let index = i*initialAss.length+j
                solution[key] = '1'
            }
        }   
    }
    return solution;
}

export const maxComplement = (matrix) => {
    let max = Math.max(...matrix)
    const tabC = []
    while(max%10 != 0){
        max = max + 1
    }

    for(let i=0; i<matrix.length; i++){
        tabC.push(max-matrix[i])
    }  
    return {
        tabC,
        max
    }
}