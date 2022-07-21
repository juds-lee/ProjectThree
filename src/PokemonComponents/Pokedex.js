import React from 'react';
import Popup from 'reactjs-popup';
import { useState } from 'react';


const PokeDex = (props) => {
  function handlePokemonSprites() {
  }
  return(
      <div>
        <section>
          <Popup 
              trigger={
              <button 
              className="button pokedex">  
              <img 
              src="/images/pokedex.jpeg" 
              alt="image of a pokedex" 
              className='pokedexImg'
              />
              </button>}
              modal
              nested>
            {close => (
              <div className="modal">
                <button className="close" onClick={close}></button>
                <div className="header">
                  <h2 className="pokedexHeader">Pokedex</h2>
                </div>
                <div className="pokedexP">
                  <p>Here are the Pokemon you've caught!</p>
                </div>
                <div className="pokedexContent">
                  {props.correctArr.map((pokemon) => {
                    return (
                      <div className='pokemonContainer' key={pokemon.id}>
                        <div 
                        onClick={(e) => {handlePokemonSprites()}}
                        className='pokemonSpritesBox' 
                        >
                        <img
                        className='sprites' 
                        src={pokemon.sprites.front_default} 
                        alt={pokemon.name}
                        />
                        {pokemon.name}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </Popup>
      </section>

    </div>
  )
 
};
export default PokeDex;