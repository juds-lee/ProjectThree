const DisplayPokemon = ({pokemon}) => {

    if (!pokemon.sprites){
        return (<div>
            loading...
        </div>
        );
    }
    return(
        <div>
            {pokemon.name}
            <img src={pokemon.sprites.front_default} alt={pokemon.name}/>

        </div>
    )
}
export default DisplayPokemon;
