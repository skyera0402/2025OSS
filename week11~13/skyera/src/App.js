import logo from './logo.svg';
import './App.css';
//import Time from './Time.js'; 
//import CountEffect from './CountEffect';
//import RefTest from './RefTest';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; 
import About from './pages/About'; 

function App() {
  return (
    <Router> 
    <Routes> 
      <Route path="/" element={<Home />} /> 
      <Route path="/about" element={<About />} /> 
      </Routes> 
    </Router> 
  );
    
}


export default App;


/* <div className="App">
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
*/