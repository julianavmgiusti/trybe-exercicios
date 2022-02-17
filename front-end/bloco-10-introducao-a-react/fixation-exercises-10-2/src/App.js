import './App.css';
import staringCat from './staringCat.jpg';
import Image from './Image.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <main>{
        <><Image source={staringCat} className="App-logo" alternativeText="Cute cat staring" /><><p>
            Edit <code>src/App.js</code> and save to reload.
          </p><a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
              Learn React
            </a></></>
      }</main>
      </header>
    </div>
  );
}

export default App;
