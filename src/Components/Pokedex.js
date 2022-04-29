import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const PokeDex = (props) => {
 // creating useEffect Bheaviour
 
    return(
         <Popup 
    trigger={<button className="button"> Open Modal </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Pokedex </div>
        <div className="pokedexContent">
          {props.correctArr.map((pokemon) => {
            return (
              <div key={pokemon.id}>
                  {pokemon.name}
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                  
              
              
              </div>
            )
          })}
        </div>
        <div className="actions">
          
          <button
            className="button"
            onClick={() => {
        
              close();
            }}
          >
            Close Pokedex
          </button>
        </div>
      </div>
    )}
  </Popup>
    )
 
};
export default PokeDex;