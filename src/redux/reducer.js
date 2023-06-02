const initialState = {
    myFavorites: []
}

const rootReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case "REMOVE_FAV":
            let copy1 = state.myFavorites;
            copy1.push(payload)
            return {...state, myFavorites: copy1}
        
    case "ADD_FAV":
        let copy2 = state.myFavorites.filter((char)=>{
            return char.id !== Number(payload)
        })
        return {...state, myFavorites: copy2}
        default:
            return state;
    }
    
}

export default rootReducer