export const initialState = {
    nbAff: 0,
    initialAssignement: null,
    horizontalHeaders: null,
    verticalHeaders: null,
    minCol: null,
    minRow: null,
    zeroPerColumnMatrix: null,
    zeroPerRowMatrix: null,
    zeroParRangee: null
};

export const reducer = (state, action) => {
    switch(action.type){
        case 'init':
            return {
                ...state, 
                nbAff: action.nbAff, 
                horizontalHeaders: action.horizontalHeaders, 
                verticalHeaders: action.verticalHeaders
            }
        case 'resolve':
            return {
                ...state,
                initialAssignement: action.initialAssignement,        
                minCol: action.minCol,
                minRow: action.minRow,
                zeroPerColumnMatrix: action.zeroPerColumnMatrix,
                zeroPerRowMatrix: action.zeroPerRowMatrix,
                zeroParRangee: action.zeroParRangee
            }
        default:
            return state;
    }
}