import Nav from './components/NavBar/NavBar.js';
import './components/NavBar/NavBar.css';
import ItemListContainer from './components/ItemListContainer/index'

function App() {
  return (
    <div>
      <Nav />
      <ItemListContainer nombre="Sasha"/> 
    </div>
   
  );
}

export default App;
