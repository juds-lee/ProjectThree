import React from 'react';
import Popup from 'reactjs-popup';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './UserForm';
import PokemonCard from './PokemonCard';

const PokeDex = (props) => {
     const [sprites, setSprites] = useState([]);
    //  const [card, setCard] = useState(false);
    function handlePokemonSprites (e) {
      axios({
        url: `https://pokeapi.co/api/v2/pokemon/${props.pokemon.name}`,
        method: "GET",
      })
      .then((response) => {
       setSprites(response.data.abilities);
      })
      .catch(err => {
        console.log(err, "Something went wrong!")
      });
      return(
      sprites.map((i) => {
         <div className="view">
        {i}
        </div>  
        console.log(i.ability.name)
      }) 
      )
    }
    return(
  <Popup 
      trigger={<button className="button pokedex">  
      <img src="/images/pokedex.jpeg" alt="" className='pokedexImg'/>
      </button>}
      modal
      nested>
    {close => (
      <div className="modal">
        <button className="close" onClick={close}></button>
        <div className="header">
          <h2 class="pokedexHeader">Pokedex</h2>
        </div>
        <div className="pokedexP">
          <p>Here are the Pokemon you've caught!</p>
        </div>

        <div className="pokedexContent">
          {props.correctArr.map((pokemon) => {
            return (
              <div className='pokemonContainer'>
                <div onClick={(e)=>{handlePokemonSprites(e)}} className='pokemonSpritesBox' key={pokemon.id}>
                    <img className='sprites' src={pokemon.sprites.front_default} alt={pokemon.name}/>
                     {pokemon.name}
                </div>
              </div>
              
            )
          })}
        </div>
      </div>
    )}
  </Popup>
  
    )
 
};
export default PokeDex;