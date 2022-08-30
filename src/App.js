// import React, { useEffect } from 'react';
import NavBar from './components/NavBar/NavBar.js';
import './components/NavBar/NavBar.css';
import ItemListContainer from './components/ItemListContainer/index'
import { Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart/Cart.js';
import CartProvider from './context/CartContext.js';




function App() {


  return (
    
    <div className='container'>
      <CartProvider>
        
              <NavBar />
              
              <Routes>
                <Route path='/'element={<ItemListContainer /> }/> 
                <Route path='/category/:categoryId' element={<ItemListContainer/>}/>  
                <Route path='/detail/:productId' element={<ItemDetailContainer/>} />
                <Route path="/cart" element={<Cart />}></Route>
              </Routes>

      </CartProvider>
    </div>
   
  
  );
}

export default App;
