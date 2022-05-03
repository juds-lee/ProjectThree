
const DisplayPokemon = ({pokemon, isColor, hint}) => {
    let newClass = "guessPokemon";
        if (isColor || hint) {
            newClass = null
            }

    if (!pokemon.sprites){
        return (<div className="displayPokemon">
            loading...
        </div>
        );

    } return(
        <div className="displayPokemon">
           
            <img className={newClass} src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name}/>
        </div>
    )
}
export default DisplayPokemon;

