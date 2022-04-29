const DisplayResults = ({userInput, displayedPokemon} ) => {

    if (!userInput) {
        return(
            <div>nothing</div>
        )
    } else if (userInput && userInput === displayedPokemon){
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