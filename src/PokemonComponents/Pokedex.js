import React from 'react';
import { useState } from 'react';
import Popup from 'reactjs-popup';
import app from '../firebase';
import { ref, getDatabase, onValue } from 'firebase/database';
import { UserAuth } from '../contexts/AuthContexts';

const PokeDex = (props) => {
  const {user} = UserAuth();
  const [pokemonInfo, setPokemonInfo] = useState([]);

  const callPokeFromFirebase = () => {
    // this will grab the pokemon stored into the users firebase in order to display it when the modal is clicked
    const database = getDatabase(app);
    const dbRef = ref(database, `users/${user?.uid}`);
    onValue(dbRef, (response) => {
      // create an empty array to hold our pokemon objects in
      const pokemonArray = [];
      const data = response.val();
      for (let key in data) {
        pokemonArray.push({key: key, 
          pokemon: data[key]});
      }
      setPokemonInfo(pokemonArray);
    })
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
              onClick={callPokeFromFirebase}
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
                 
                  {pokemonInfo.map((i) => {
                    return (
                      <div className='pokemonContainer' key={i.id}>
                     <div className='pokemonSpritesBox'>
                        <img
                        className='sprites' 
                        src={i.pokemon.pokemon.sprites.front_default} 
                        alt={i.pokemon.pokemon.name}
                        />
                        {i.pokemon.pokemon.name}
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