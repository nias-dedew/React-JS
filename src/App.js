import logo from './logo.svg';
import './App.css';
import TextClass from './TextClass'
import Text from './text'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Js</h1>
        <p>
          Percobaan Pertama
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apa itu React?
        </a>
        <Text color="yellow" text="contoh 1" />
        <TextClass color="white" text="contoh 2" />
      </header>
    </div>
  );
}

export default App;
