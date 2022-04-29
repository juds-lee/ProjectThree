import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DisplayPokemon from './Components/DisplayPokemon';
import UserForm from './Components/UserForm';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const randomPokemonID = Math.ceil(Math.random() * 150);

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
  // console.log(pokemon)
 
  const submitAnswer = (e, pokeAnswer) => {
    // e.preventDefault();
    // const copyOfpoke = [...pokemon.name]
    // if (submitAnswer == pokemon.name)
    // console.log("yes!")
    } 

  return (
     <div className='App'>
      <h1>Pokedex</h1>
      <DisplayPokemon pokemon={pokemon}/>
      <UserForm pokemon={pokemon}/>
      <button onClick={() => {loadNewPokemon()} }>New Pokemon</button>
    </div>
  );
  }

export default App;
