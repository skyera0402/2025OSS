import logo from './logo.svg';
import './App.css';
import Time from './Time.js'; 
import CountEffect from './CountEffect';
import RefTest from './RefTest';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          <Time />
          <CountEffect/>
          <RefTest/>
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </header>
    </div>
  );
}


export default App;
