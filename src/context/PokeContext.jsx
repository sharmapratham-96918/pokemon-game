import { createContext, useReducer } from "react";
import { PokeReducer } from "./PokeReducer";

const PokeContext =createContext()

export const PokeProvider = ({children}) =>{

    const initialState = {
        pokemon : {
            name: "charmander",
            image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg",

        },
        score:0,
        chances:3,
        brightness : true,
    }
 const [state , dispatch] =useReducer(PokeReducer , initialState)
    return(
        <PokeContext.Provider value= {{...state ,dispatch}}>
            {children}
        </PokeContext.Provider>
    )
}

export default PokeContext