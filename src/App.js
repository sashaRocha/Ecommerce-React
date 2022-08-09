import NavBar from './components/NavBar/NavBar.js';
import './components/NavBar/NavBar.css';
import ItemListContainer from './components/ItemListContainer/index'
import { Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';




function App() {
  return (
  <div>
      <NavBar />
      <Routes>
      <Route path='/'element={<ItemListContainer /> }/> 
      <Route path='/category/:categoryId' element={<ItemListContainer/>}/>  
      <Route path='/detail/:productId' element={<ItemDetailContainer/>} />
      </Routes>
  </div>
   
  );
}

export default App;
