import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import firebaseConfig from '../Firebase/Firebase';
import { getDatabase, ref, onValue, push, remove } from "firebase/database"


const PokeDex = (props) => {
 // creating useEffect Bheaviour
//  console.log(props.correctArr);
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
        <div className="content">
         
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