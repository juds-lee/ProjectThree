import { useState } from "react";
import DisplayResults from "./DisplayResults";
import { UserAuth } from "../contexts/AuthContexts";
import { getDatabase, ref, push, set, child } from 'firebase/database';
import app from "../firebase";

const UserForm = ({ pokemon, userInput, setUserInput, correctArr, setCorrectArr, setIsColor, isColor, setHint, hint}) => {
    const {user} = UserAuth();
    const [text, setText] = useState("");
    let displayedPokemon = pokemon.name
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setUserInput("")
        
        setUserInput(text.toLowerCase())
        if( text.toLowerCase() == displayedPokemon) {
            // create array to display in our pokedex
            // toggle to colored ver on correct answer
            setCorrectArr([pokemon, ...correctArr])
            setIsColor(!isColor)  
            // connect to firebase 
            const database = getDatabase(app);
            // create data pathway for each user
            const newPokemonKey = push(child(ref(database), `users/${user?.uid}/pokemon`)).key;
            // save pokemon to each users individual path
            set(ref(database, `users/${user?.uid}/${newPokemonKey}`), {pokemon});
        }
        setText("") 
    }
    // save text input to variable
    const handleUserInput = (e) => {
         setText(e.target.value)        
    }

    // creating a hint variable and toggler
    const handleHint = (e) => {
         setHint(!hint) 
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
                        pokemon={pokemon}
                        userInput={userInput} 
                        correctArr={correctArr}
                        displayedPokemon={displayedPokemon} 
                        setIsColor={setIsColor}
                        isColor={isColor}
                        hint={hint}
                        setHint={setHint}
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