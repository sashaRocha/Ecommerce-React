import Nav from './components/NavBar/NavBar.js';
import './components/NavBar/NavBar.css';
import ListContainer from './components/ItemListContainer/index'
import './components/ItemListContainer/listcontainer.css'
function App() {
  return (
    <div>
      <Nav />
      <ListContainer texto="FAKE LIST"/>
    </div>
   
  );
}

export default App;
