import { useContext } from 'react';
import  {CartContext}  from '../../context/CartContext';
import CartItem from '../CartItem';
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import './Cart.css';

export default function Cart(){
    const {cart} = useContext(CartContext);

    const {cleanCart, totalQuantity,totalPrice} = useContext(CartContext)
    console.log(cart);
    const createOrder = () => {
      
      let order = {
        buyer:{
          name: 'Killua Zoldyck',
          phone: '1234567',
          email: 'killua@zoldyck'
        },
       items: cart.addCarItem(),
       total : cart.totalQuantity,
       price: cart.totalPrice
      }
      console.log(order);
    }
   return(
    <>
   
      <div className='cart-container'>
            <div className='title'>
              <h1>CART PRODUCTS</h1>
            </div>
            {/* <h2>Items: {cart.length} </h2> */}
            { (cart.length > 0) ? cart.map((item) => {
            return <CartItem key={item.id} id={item.id} quantity={item.quantity} img={item.img} name={item.name} 
                     description={item.description} price={item.price}/>
            })
            :
            <Link to={`/`} className="branch">Seguir comprando...</Link>
            }
             
            <div className='cart-sumary'> 
            
      <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush"> 
      
        <ListGroup.Item>Total Items: {totalQuantity}</ListGroup.Item>
        <ListGroup.Item>Total Price: ${totalPrice}</ListGroup.Item>
        <Button onClick={() => cleanCart(cart)} as="input" type="reset" value="Empty Cart" className='buttom-reset' />
        <Button  as="input" type="reset" value="Comprar" className='buttom-reset' />
      </ListGroup>
    </Card>
    </div>
      </div>
    
     </>
    )
}

 