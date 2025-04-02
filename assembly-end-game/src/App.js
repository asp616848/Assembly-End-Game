import logo from './logo.svg';
import './App.css';
import { languages } from './langs.js';
import React from 'react';
import {clsx} from 'clsx';

function App() {
  
  const langs = languages;
  const [currWord,setWord] = React.useState("react".toUpperCase());
  const [guessed,setGuess] = React.useState([]);

  const wrongGuesses = () => {
    let cnt = 0;
    guessed.forEach((wrd) => {
        if (!currWord.includes(wrd)) { 
            cnt += 1;
        }
    });
    return cnt;
  }
  const wrongCnt = wrongGuesses();

  const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase()
  console.log(guessed)

  function keyClicked(key){
    setGuess(prev => prev.includes(key)? [...prev] : [...prev, key])
  }

  return (
    <div className="App">
      <div className="App-head">
        <header className="Head-header">
          Assembly: Endgame  
        </header>
        <p>
          Guess the word in under 8 attempts to keep the
          <br></br> programming world safe from Assembly!
        </p>

        <div className="Head-p">
          “Farewell HTML & CSS” 🫡
        </div>

      </div>
        
      <div className="App-Langs">
        {
          langs.map((element, index) => (
            <div 
              key={index} 
              className="Lang-item" 
              style={{ backgroundColor: element.backgroundColor, color: element.color }}
            >
              {element.name}
            </div>
            )
          )
        }
      </div>

      <section className='App-word'>
        {currWord.split('').map((el, index) => (
          <div className='word' key={index}>
            {guessed.includes(el) &&el.toUpperCase()}
          </div>
        ))}
      </section>

      <div className='keyboard'>
        {
        alphabet.split("").map((key, ind)=>
          <button 
            key={ind} 
            onClick={()=>keyClicked(key.toUpperCase())} 
            className={clsx("key", {
              "correct": guessed.includes(key) && currWord.includes(key),   // Green if guessed and correct
              "incorrect": (guessed.includes(key)) && !currWord.includes(key) // Red if guessed but incorrect
            })} >

            {key.toUpperCase()}
          </button>
        )}        
      </div>
    </div>
  );
}

export default App;
