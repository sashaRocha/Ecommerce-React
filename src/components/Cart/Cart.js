import { useContext } from 'react';
import  {CartContext}  from '../../context/CartContext';
import CartItem from '../CartItem';
import {Link} from 'react-router-dom';

import './Cart.css';

export default function Cart(){
    const {cart} = useContext(CartContext);
    console.log(cart);
    const createOrder = () => {
      
      let order = {
        buyer:{
          name: 'Killua Zoldyck',
          phone: '1234567',
          email: 'killua@zoldyck'
        },
       items: cart.addCarItem(),
       total : cart.totalQuantity
      }
      console.log(order);
    }
   return(
    
      <div className='cart-container'>
            <div className='title'>
              <h1>CART PRODUCTS</h1>
            </div>
            <h2>Items: {cart.length} </h2>
            { (cart.length > 0) ? cart.map((item) => {
            return <CartItem key={item.id} id={item.id} quantity={item.quantity} img={item.img} name={item.name} />
            })
            :
            <Link to={`/`} className="branch">Seguir comprando...</Link>
            }
      </div>
     
    )
}

 