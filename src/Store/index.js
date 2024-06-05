export const initialState = {
    nbAff: 0,
    maxInitialAssignement: null,
    initialAssignement: null,
    horizontalHeaders: null,
    verticalHeaders: null,
    minCol: null,
    minRow: null,
    zeroPerColumnMatrix: null,
    zeroPerRowMatrix: null,
    zeroParRangee: null,
    solution: null,
    plusTitles: null,
    graph: null,
    cost: 0,
    costText: '',
    showPopup: false,
    max: false,
    maxValue: 0
};

export const reducer = (state, action) => {
    switch(action.type){
        case 'init':
            return {
                ...state, 
                nbAff: action.nbAff, 
                horizontalHeaders: action.horizontalHeaders, 
                verticalHeaders: action.verticalHeaders,
                initialAssignement: null,
                minCol: null,
                minRow: null,
                zeroPerColumnMatrix: null,
                zeroPerRowMatrix: null,
                zeroParRangee: null,
                solution: null,
                plusTitles: null
            }
        case 'resolve':
            return {
                ...state,
                initialAssignement: action.initialAssignement,        
                minCol: action.minCol,
                minRow: action.minRow,
                zeroPerColumnMatrix: action.zeroPerColumnMatrix,
                zeroPerRowMatrix: action.zeroPerRowMatrix,
                zeroParRangee: action.zeroParRangee,
                solution: action.solution,
                maxInitialAssignement: action.maxInitialAssignement,
                max: action.max,
                maxValue: action.maxValue
            }
        case 'iterate':
            return {
                ...state,
                solution: action.solution
            }
        case 'addPlus':
            return {
                ...state,
                plusTitles: action.plusTitles
            }
        case 'substitute':
            return {
                ...state,
                solution: action.solution,
                plusTitles: null
            }
        case 'addGraph':
            return {
                ...state,
                graph: action.graph,
                showPopup: true,
            }
        case 'updateCost':
            return {
                ...state,
                cost: action.cost,
                costText: action.costText
            }
        case 'closePopup':
            return {
                ...state,
                showPopup: false
            }
        case 'reinit':
            return {
                ...state,
                nbAff: 0,
                maxInitialAssignement: null,
                initialAssignement: null,
                horizontalHeaders: null,
                verticalHeaders: null,
                minCol: null,
                minRow: null,
                zeroPerColumnMatrix: null,
                zeroPerRowMatrix: null,
                zeroParRangee: null,
                solution: null,
                plusTitles: null,
                graph: null,
                cost: 0,
                costText: '',
                showPopup: false,
                max: false,
                maxValue: 0
            }
        default:
            return state;
    }
}