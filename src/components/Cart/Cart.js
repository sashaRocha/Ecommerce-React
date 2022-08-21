import { useContext } from 'react';
import  {CartContext}  from '../../context/CartContext';
import CartItem from '../CartItem';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

export default function Cart(){
    const {cart,removeFromCart} = useContext(CartContext);
     console.log(cart);
   
   
   
   return(
      <div>
            <h1>ECOMMERCE</h1>
            <h2>Items: {cart.length} </h2>
            { (cart.length > 0) ? cart.map((item) => {
            return <CartItem key={item.id} id={item.id} quantity={item.quantity} />
            })
            :
            <Link to={`/`} className="branch">Seguir comprando...</Link>
            }
            { cart.length > 0 && cart.map((item) => (
              // <img key={item.id} src={item.img} alt='algo' />
              <div>
                <Button onClick={() => removeFromCart(item.id)} >
                   Remove
                </Button>
              </div>
          
            ))}
      </div>
          
    )
}

 