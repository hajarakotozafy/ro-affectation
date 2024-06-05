import { minimumOfColumn, zeroPerColumn, minimumOfRow, zeroPerRow, encadrage, isSolutionFinale, groupedByRow, groupedByColumn, findRowWithNonZeroEncadre, marquage, raillure, addPlus, returnMinBeforeSubstitute, substitute, FinalSolutionToGraph, maxComplement } from "./Algo";
export const SubmitForm2 = (e,nb, dispatch, affectationData) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const initialAffectation = Object.fromEntries(data.entries());
    const type = initialAffectation.choice
    let initialAffectationValues = Object.values(initialAffectation).map(nb => Number(nb));
    initialAffectationValues.pop()
    console.log("type", type, "initValues", initialAffectationValues)
    const maxInitialAffectationValues = [...initialAffectationValues];
    let max = 0;
    if(type === 'max'){
        const res = maxComplement(initialAffectationValues)
        initialAffectationValues = res.tabC
        max = res.max
    }
    const maxInitialAssignement = []
    for(let i = 0; i < nb; i++){
        maxInitialAssignement.push({
            value: maxInitialAffectationValues[i],
            color: ""
        })
    }
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
    let matrixToCadre = encadrage(matrixRowWithZero, nb);
    let loopDelay = 1200;
    let z = 0, zText = []
    minCol.forEach(el => {
        if(el!==0){
            z+=el
            zText.push(el) 
        }
    })
    minRow.forEach(el => {
        if(el!==0){
            z+=el
            zText.push(el)
        }
    })
    zText=zText.join('+')
    dispatch({
        type: "resolve",
        maxInitialAssignement: maxInitialAssignement,
        initialAssignement: initialAssignement,
        minCol: minColToShow,
        minRow: minRowToShow,
        zeroPerColumnMatrix: zeroParColonneToShow,
        zeroPerRowMatrix:zeroParLigneToShow,
        zeroParRangee: zeroParRangee,
        solution: matrixToCadre,
        max: type === 'max' ? true : false,
        maxValue: max
    })
    dispatch({
        type: 'updateCost',
        cost: z,
        costText: zText
    })
    let isSolution = isSolutionFinale(matrixToCadre)
    const func = () => {
        setTimeout(() => {
            const matrixGroupedByRow = groupedByRow(Math.sqrt(nb), nb, matrixToCadre)
            const matrixGroupedByColumn = groupedByColumn(Math.sqrt(nb), nb, matrixToCadre)
            const rowToMarque = findRowWithNonZeroEncadre(matrixGroupedByRow)
            let matrixWithMarquage = [];
            rowToMarque.forEach(el => {
                const searchInto = {
                    range: "row",
                    fromRangeId: el
                }
                matrixWithMarquage.push({
                    range: 'row',
                    id: el
                })
                marquage(searchInto, matrixGroupedByColumn, matrixGroupedByRow, false, matrixWithMarquage)
            })
            const { rightTitle, bottomTitle, addPlusToTitle, minMultiplicator } = addPlus(matrixWithMarquage, matrixToCadre)
            dispatch({
                type: "addPlus",
                plusTitles: {
                    rightTitle, bottomTitle, addPlusToTitle
                }
            })
            setTimeout(() => {
                const matrixRaille = raillure(matrixWithMarquage, matrixToCadre)
                dispatch({
                    type: "iterate",
                    solution: matrixRaille
                })
                setTimeout(() => {
                    const matrixWithMin = returnMinBeforeSubstitute(matrixRaille)
                    dispatch({
                        type: "iterate",
                        solution: matrixWithMin.matrixRaille
                    })
                    setTimeout(() => {
                        z+=minMultiplicator * matrixWithMin.min.value
                        zText+='+' + (minMultiplicator > 1 ? minMultiplicator + '*' + matrixWithMin.min.value: matrixWithMin.min.value);   
                        const matrixSubstituted = substitute(matrixRaille, matrixWithMin.min.value);
                        dispatch({
                            type: "substitute",
                            solution: matrixSubstituted
                        });
                        setTimeout(() => {
                            dispatch({
                                type: 'updateCost',
                                cost: z,
                                costText: zText
                            })
                            setTimeout(() => {
                                matrixSubstituted.forEach(el => {
                                    el.color = ''
                                })
                                dispatch({
                                    type: 'iterate',
                                    solution: matrixSubstituted
                                });
                                setTimeout(() => {
                                    for(let i = 0; i < nb; i++){
                                        if(matrixSubstituted[i].value === 0){
                                            matrixSubstituted[i].color = "#E0E9F0"
                                        }
                                    }
                                    dispatch({
                                        type: 'iterate',
                                        solution: matrixSubstituted
                                    })    
                                    const matrixNumberOnly = []
                                    matrixSubstituted.forEach(el => {
                                        matrixNumberOnly.push(el.value)
                                    })
                                    setTimeout(() => {
                                        matrixToCadre = encadrage(matrixNumberOnly, nb)
                                        dispatch({
                                            type: 'iterate',
                                            solution: matrixToCadre
                                        })
                                        if(!isSolutionFinale(matrixToCadre)){
                                            func()
                                        }else{
                                            setTimeout(() => {
                                                dispatch({
                                                    type: 'addGraph',
                                                    graph: FinalSolutionToGraph(matrixToCadre)
                                                })
                                            }, loopDelay)
                                        }
                                    },loopDelay)
                                }, loopDelay)
                            }, loopDelay)
                        }, loopDelay)
                    }, loopDelay)
                }, loopDelay)
            }, loopDelay)
        }, loopDelay);
    }
    if(!isSolution){
        func();
    }else{
        setTimeout(() => {
            dispatch({
                type: 'addGraph',
                graph: FinalSolutionToGraph(matrixToCadre)
            })
        }, loopDelay)
    }
}