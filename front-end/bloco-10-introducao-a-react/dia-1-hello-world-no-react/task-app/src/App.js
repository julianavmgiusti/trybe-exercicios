import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const compromissos = ['React', 'JSX', 'Babel', 'Webpack', 'Flux/Redux','fetch', 'Jest/RTL']
  return (
  
    <div className="App">
      <Header></Header>
      {compromissos.map((compromisso) => Task(compromisso))}
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
