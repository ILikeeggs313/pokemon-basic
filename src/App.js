import logo from './logo.svg';
import './App.css';
import PokeCard from "./PokeCard";
import PokeDex from "./PokeDex";
import PokeGame from "./PokeGame";

function App() {
  return (
    <div>
      <img src = {logo} className = "App-logo" alt = "logo" />
      <PokeGame />
    </div>
  );
}






export default App;
{/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          

        </a>
      </header>
    </div> */}