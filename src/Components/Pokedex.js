import React from 'react';
import Popup from 'reactjs-popup';

const PokeDex = (props) => {
 // creating useEffect Bheaviour
 
    return(
  <Popup 
      trigger={<button className="button pokedex">  
      <img src="/images/pokedex.jpeg" alt="" className='pokedexImg'/>
      </button>}
      modal
      nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}> &times; </button>
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
                <div className='pokemonSpritesBox' key={pokemon.id}>
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