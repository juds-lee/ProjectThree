import { useEffect, useState } from "react";
import PokeDex from "./Pokedex";

const DisplayResults = ({userInput, displayedPokemon, setCorrectArr, correctArr} ) => {
    // const [correct, setCorrect] = useState("")
//     useEffect(() => {
//     setCorrectArr([userInput, ...correctArr])
//   },[correct])
    if (!userInput) {
        return(
            <div>nothing</div>
        )
    } else if (userInput && userInput === displayedPokemon){
        // setCorrect(userInput)
        return(
            <div>
                <p>Correct</p>
            </div>
        )
    }else if (userInput && userInput !== displayedPokemon){
        return(
            <div>tryagain</div>
        )
        
    }else {
        return(
            <div>empty</div>
        )
    }
}

export default DisplayResults;