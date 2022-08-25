import { useContext } from 'react';
import  {CartContext}  from '../../context/CartContext';
import CartItem from '../CartItem';
import {Link} from 'react-router-dom';

export default function Cart(){
    const {cart} = useContext(CartContext);
   return(
      <div>
            <h1>ECOMMERCE</h1>
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

 