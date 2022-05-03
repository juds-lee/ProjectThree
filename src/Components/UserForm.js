import { useState } from "react";
import DisplayPokemon from "./DisplayPokemon";
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
           props.setIsColor(!props.isColor)
        }
        setText("") 
    }

    const handleUserInput = (e) => {
         setText(e.target.value)        
    }

    const handleHint = (e) => {
         props.setHint(!props.hint) 
    }
 
    return(
    <section>
        <div className="submitGuess">
           <form 
           onSubmit={handleSubmit}
           >
               <label htmlFor="submitGuess"></label>
               <input
                type="text" 
                className="answerText"
                name="userSubmission" 
                id="userSubmission"
                onChange={(e)=>{handleUserInput(e)}}
                value={text}
                placeholder="Who's that Pokemon?" 
                required
                />
             <button  className="submitButton" type="submit">Submit</button>
           </form>
        </div>
            <div className="resultsBar">
                <div className="displayResults">
                    <DisplayResults 
                        pokemon={props.pokemon}
                        userInput={props.userInput} 
                        correctArr={props.correctArr}
                        displayedPokemon={displayedPokemon} 
                        setIsColor={props.setIsColor}
                        isColor={props.isColor}
                        hint={props.hint}
                        setHint={props.setHint}
                    />
                </div>
                <div className="hintButton">
                    <button onClick={(e)=>{handleHint(e)}}className="hint">HINT</button>
                </div>
            </div>
            
        
    </section>
       
    )
} 


export default UserForm;