import { useState } from "react";
import DisplayResults from "./DisplayResults";
const UserForm = (props) => {

    const [text, setText] = useState("");
    let displayedPokemon = props.pokemon.name
    const [userInput, setUserInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
       setUserInput(text)
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
                <button>Submit</button>
           </form>

        </div>

        <DisplayResults userInput={(e)=>{handleSubmit(userInput)}} displayedPokemon={displayedPokemon}/>
    </section>
       
    )
} 


export default UserForm; 







// const GuessPokemon = (props) => {
//     const [guess, setGuess] = useState({
//         pokemonGuess: ""
//     });
//       const handleChange = e => {
//     setGuess({[e.target]: e.target.value})
//     console.log(e.target.value)
//   }
//     return(

//    <form>
//         {/* <label htmlFor="userGuess" className="sr-only">Guess your Pokemon</label> */}
//         <input type="text" onChange={handleChange} value={guess.pokemonGuess}/>
//         {/* <input type="text" className="userGuess" id="userGuess" maxLength = "20" placeholder="Guess your Pokemon"/> */}
//         <button onChange={handleChange} className="submit" type="userSubmit">Submit</button>
//    </form>
//      ) 
// }


//  <form>
//         {/* <label htmlFor="userGuess" className="sr-only">Guess your Pokemon</label> */}
//         <input type="text" onChange={event => setGuess(event.target.value)}  />
//         {/* <input type="text" className="userGuess" id="userGuess" maxLength = "20" placeholder="Guess your Pokemon"/> */}
//         <button  className="submit" type="userSubmit">Submit</button>
//    </form>