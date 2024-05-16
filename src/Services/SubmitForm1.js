const generateHeaders = (nb, type) => {
    const Headers = []
    let character = type=="vertical"? "A" : "a";
    Headers.push({value:character, color: ""});
    for(let i = 1; i < nb; i++){
        character = String.fromCharCode(character.charCodeAt(0) + 1);
        Headers.push({value:character, color: ""});
    }
    return Headers
}

export const SubmitForm1 = (e, dispatch) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const nbAff = Object.fromEntries(data.entries());
    const nombreAffectation = Number(nbAff.nbAff)
    const horizontalHeaders = generateHeaders(nombreAffectation, "horizontal")
    const verticalHeaders = generateHeaders(nombreAffectation, "vertical")
    dispatch(
        {
            type: 'init',
            nbAff: nombreAffectation, 
            horizontalHeaders: horizontalHeaders, 
            verticalHeaders: verticalHeaders
        }
    )
}