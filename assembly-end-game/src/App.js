import logo from './logo.svg';
import './App.css';
import { languages } from './langs.js';

function App() {
  
  const langs = languages

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
        {/* goota add conditional for the button below TODO for color, visibility and text */}

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
    </div>
    
  );
}

export default App;
