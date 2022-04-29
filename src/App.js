import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DisplayPokemon from './Components/DisplayPokemon';
import UserForm from './Components/UserForm';

function App() {
// setting the pokemon
  const [pokemon, setPokemon] = useState([]);
  const randomPokemonID = Math.ceil(Math.random() * 300);

// api call
  function loadNewPokemon() {
      axios({
        url: `https://pokeapi.co/api/v2/pokemon/${randomPokemonID}`,
        method: "GET",
      })
      .then((response) => {
        // console.log(response.data.name)
        setPokemon(response.data)
      })
      .catch(err => {
        console.log(err, "Something went wrong!")
      });
    }
  useEffect(() => {
    loadNewPokemon()
  },[])
 
  return (
     <div className='App'>
       <h1>Who's that Pokemon!</h1>
      <DisplayPokemon pokemon={pokemon}/>
      <UserForm pokemon={pokemon} />
    
      <button onClick={() => {loadNewPokemon()}}>New Pokemon</button>
    </div>
  );
  }

export default App;
