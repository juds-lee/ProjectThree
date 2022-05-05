import { useState } from "react";
import PokeDex from "./Pokedex";


const PokemonCard = (props) => {
    const attacks = [];
    props.handleAbility()
    props.sprites.map((i) => {
        attacks.push(i.ability.name)
    console.log(props.sprites)
    

}
//     // return(
    //   <div>
    //    <p>{props.sprites}</p>
    //   </div>
    // )
//     // create an empty array 
//     const [abilities, setAbilities] = useState([]);
//     // each loop and item to the array 
        // props.sprites.map(() => {
        //    setAbilities([props.sprites, ...abilities])    
        // }) 
//             console.log(props.sprites)
//     // end of the function, return the array

//     // console.log(props.sprites)
//     //     props.sprites.map((i) => {
//     //         return(
//     //         <div className="view">
//     //             <p>HELLO IM WORKIN</p>
//     //         </div>  
//     //         )
//     //     }) 
        
       



export default PokemonCard;