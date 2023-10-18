import logo from './logo.svg';
import './App.css';
import ModelSelector from './ModelSelector';

function App() {
  return (
    <><div className="App-title">
      <h1>SEC Filings: Topics and sentiment</h1>
    </div>
    <div className="App">
    <ModelSelector/>
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
    </div></>
  );
}

export default App;
