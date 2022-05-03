import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const DisplayResults = ({userInput, displayedPokemon} ) => { 
    if (!userInput) {
        return(
            <div>Results</div>
        )
    } else if (userInput && userInput === displayedPokemon){
        return(
        <div>Correct!</div>
        )
    }else if (userInput && userInput !== displayedPokemon){
        return(
          <div>Try again</div>
        )
        
    }
}

export default DisplayResults;