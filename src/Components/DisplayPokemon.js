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
            <img className="guessPokemon" src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name}/>

        </div>
    )
}
export default DisplayPokemon;
