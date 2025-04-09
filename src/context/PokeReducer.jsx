export const PokeReducer = (state ,action) => {

    switch(action.type){

        case "FETCH_POKEMON" :
            return{
                ...state,
                brightness: true,
                pokemon: action.payload
            }

        case "INCRESE_SCORE" :
            return{
                ...state,
                score: state.score + 10,
                brightness: false,
            }    
            case "DECRESE_SCORE" :
                return{
                    ...state,
                    chances: state.chances - 1,
                    brightness: false,
                }    
    
        default:
            return state
    }
}