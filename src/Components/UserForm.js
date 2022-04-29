import { useState } from "react";
import DisplayResults from "./DisplayResults";
import PokeDex from "./Pokedex";
const UserForm = (props) => {
    const [text, setText] = useState("");
    let displayedPokemon = props.pokemon.name

    const handleSubmit = (e) => {
        e.preventDefault()
        props.setUserInput("")
        props.setUserInput(text)
        if( text == displayedPokemon) {
            props.setCorrectArr([props.pokemon, ...props.correctArr])
            console.log(props.pokemon)
        }
        setText("")
        
        
    }

    const handleUserInput = (e) => {
         setText(e.target.value)        
    }
    // console.log(userInput)
    return(
    <section>
        <div className="submitGuess">
           <form 
        //    onSubmit={(e) => props.submit(text)}>
           onSubmit={handleSubmit}
           >
               <label htmlFor="submitGuess"></label>
               <input
                type="text" 
                name="userSubmission" 
                id="userSubmission"
                onChange={(e)=>{handleUserInput(e)}}
                value={text}
                placeholder="Who's that Pokemon?" 
                required
                />
             <button type="submit">Submit</button>
           </form>
        </div>
        <PokeDex 
        // userInput={props.userInput} 
        // displayedPokemon={displayedPokemon} 
        correctArr={props.correctArr}
        />
        <DisplayResults 
            userInput={props.userInput} 
            displayedPokemon={displayedPokemon} 
        />
    </section>
       
    )
} 


export default UserForm;