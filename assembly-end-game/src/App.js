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
  const [lastWrong, setLastWrong] = React.useState("");
  function keyClicked(key){
    setGuess(prev => prev.includes(key)? [...prev] : [...prev, key])
    if(!currWord.includes(key)){
      setLastWrong(key);
    }else{
      setLastWrong("");
    }
  }
  let gameEnd = 2;
  if ( wrongCnt >= 8) {
    gameEnd = 0;
  }
  if(currWord.split("").every(letter => guessed.includes(letter))){
    gameEnd = 1;
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

        {((lastWrong!="" && gameEnd!=0) &&wrongCnt>=1) && 
          <div className="Head-p">
            “Farewell {langs[wrongCnt-1].name}” 🫡“
          </div>
        }

        {
        gameEnd==0 && <section className="game-status lost">
          <h2>You Lose!</h2>
          <p>Learn assembly and come back! 🎉</p>
        </section>
        }
        {
        gameEnd==1 && 
        <section className="game-status won">
          <h2>You win!</h2>
          <p>Well done! 🎉</p>
        </section>
        }

      </div>
        
      <div className="App-Langs">
        {
          langs.map((element, index) => (
            <div 
              key={index} 
              className={clsx("Lang-item", { "kill": index < wrongCnt })} 
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
            onClick={()=> gameEnd==2 && keyClicked(key.toUpperCase())} 
            className={clsx("key", {
              "correct": guessed.includes(key) && currWord.includes(key),   // Green if guessed and correct
              "incorrect": (guessed.includes(key)) && !currWord.includes(key) // Red if guessed but incorrect
            })} >
            {key.toUpperCase()}
          </button>
        )}
      </div>

      {gameEnd!=2 && <button onClick={()=>{gameEnd=2; setGuess([]); setWord("brrr".toUpperCase())}}className='App-newGame'> New Game</button>}
    </div>
  );
}

export default App;