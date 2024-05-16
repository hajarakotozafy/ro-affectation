import { minimumOfColumn, zeroPerColumn, minimumOfRow, zeroPerRow } from "./Algo";


export const SubmitForm2 = (e,nb, dispatch) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const initialAffectation = Object.fromEntries(data.entries());
    // console.log(Object.values(initialAffectation));
    // const nbAff = Object.fromEntries(data.entries());
    // dispatch({type: 'addNbAff', nbAff: Number(nbAff.nbAff)})
    const initialAffectationValues = Object.values(initialAffectation).map(nb => Number(nb));
    console.log(initialAffectationValues)
    const initialAssignement = []
    for(let i = 0; i < nb; i++){
        initialAssignement.push({
            value: initialAffectationValues[i],
            color: ""
        })
    }

    const { initialMinCol, minCol } = minimumOfColumn(Math.sqrt(nb), nb, initialAffectationValues);
    const { matrixColWithZero } = zeroPerColumn(initialMinCol, minCol, Math.sqrt(nb));
    const { initialMinRow, minRow } = minimumOfRow(Math.sqrt(nb), nb, matrixColWithZero);
    const { matrixRowWithZero } = zeroPerRow(initialMinRow, minRow, Math.sqrt(nb));

    console.log("minCol", minCol);
    console.log("colonne avec zéro et minLigne", matrixColWithZero, minRow);
    console.log("rangé avec zéro", matrixRowWithZero);

    const minColToShow = []
    for(let i = 0; i < Math.sqrt(nb); i++){
        minColToShow.push({
            value: minCol[i],
            color: "#7DA1AF"
        })
    }
    const minRowToShow = []
    for(let i = 0; i < Math.sqrt(nb); i++){
        minRowToShow.push({
            value: minRow[i],
            color: "#7DA1AF"
        })
    }
    const zeroParColonneToShow = []
    for(let i = 0; i < nb; i++){
        zeroParColonneToShow.push({
            value: matrixColWithZero[i],
            color: ""
        })
    }
    const zeroParLigneToShow = []
    for(let i = 0; i < nb; i++){
        zeroParLigneToShow.push({
            value: matrixRowWithZero[i],
            color: ""
        })
    }
    
    const zeroParRangee = []
    let color = ""
    for(let i = 0; i < nb; i++){
        color = matrixRowWithZero[i]==0?"#E0E9F0":""
        zeroParRangee.push({
            value: matrixRowWithZero[i],
            color
        })
    }

    dispatch({
        type: "resolve",
        initialAssignement: initialAssignement,
        minCol: minColToShow,
        minRow: minRowToShow,
        zeroPerColumnMatrix: zeroParColonneToShow,
        zeroPerRowMatrix:zeroParLigneToShow,
        zeroParRangee: zeroParRangee
    })
}