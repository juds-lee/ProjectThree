import PokeDex from "./Pokedex";
import { useState, useEffect } from "react";
import axios from "axios";

const PokemonCard = (props) => {
//    const [sprites, setSprites] = useState([]);
//   function handlePokemonSprites (e) {
//       axios({
//         url: `https://pokeapi.co/api/v2/pokemon/${props.pokemon.name}`,
//         method: "GET",
//       })
//       .then((response) => {
//        setSprites(response.data.abilities);
//       })
//       .catch(err => {
//         console.log(err, "Something went wrong!")
//       });
//       return(
//       sprites.map((i) => {
//          <div className="view">
//             {i}
//         </div>  
//         console.log(i.ability.name)
//         }) 
//       )
//     }
} 

export default PokemonCard;