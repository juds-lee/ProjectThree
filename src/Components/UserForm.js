import { useEffect, useState } from "react";
import DisplayResults from "./DisplayResults";
import PokeDex from "./Pokedex";
import firebaseConfig from "../Firebase/Firebase";
const UserForm = (props) => {

    const [text, setText] = useState("");
    // const [trigger, setTrigger] = useState(null);
    let displayedPokemon = props.pokemon.name
    const [userInput, setUserInput] = useState("")
    // const [correctArr, setCorrectArr] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault()
         setUserInput("")
        setUserInput(text)
        setText("")
    }

    const handleUserInput = (e) => {
        e.preventDefault();
         setText(e.target.value)        
    }
    console.log(userInput)
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
        <PokeDex userInput={userInput} displayedPokemon={displayedPokemon}/>
        <DisplayResults 
            userInput={userInput} 
            displayedPokemon={displayedPokemon} 
            // setCorrectArr={setCorrectArr}
            // correctArr={correctArr}
            />
    </section>
       
    )
} 


export default UserForm; 
