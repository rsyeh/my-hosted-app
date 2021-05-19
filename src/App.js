import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My Hosted App v1.0.0
        </p>
        <a
          className="App-link"
          href="https://rsyeh.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn about Ryan!
        </a>
      </header>
    </div>
  );
}

export default App;
