const DisplayResults = (props) => {
    <div></div>
    if (props.userInput && props.userInput === props.displayedPokemon){
        return(
            <div>
                <p>YAY</p>
            </div>
        )
    }else if (!props.userInput === props.displayedPokemon) {
        return(
            <div>tryagain</div>
        )
    } else {
        return(
            <div>nothing</div>
        )
    }

}

export default DisplayResults;