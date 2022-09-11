import { useContext } from 'react';
import  {CartContext}  from '../../context/CartContext';
import CartItem from '../CartItem';
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { collection, doc, increment, setDoc, updateDoc } from 'firebase/firestore';
import { DB } from '../../api/APIFirebase';
import './Cart.css';
import Swal from 'sweetalert2';


export default function Cart(){

const {cart} = useContext(CartContext);

const {cleanCart, totalQuantity,totalPrice} = useContext(CartContext)
   
  const createOrder = () => {
      const itemsForDB = cart.map(item => ({
        id: item.id,
        title: item.name,
        price: item.price
      }))
    let order = {
     
      buyer:{
        name: 'Killua Zoldyck',
        phone: '1234567',
        email: 'killua@zoldyck'
      },
      items: itemsForDB,
    cantidad : totalQuantity,
     Total: totalPrice,
     date: new Date().toDateString()
     } 
    console.log(order)
    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection(DB,'orders'))
      await setDoc(newOrderRef, order)
      return newOrderRef;
    }
    createOrderInFirestore()
    .then(prod => Swal.fire({
        icon: 'success',
        title: 'Your order has been created',
        html: `<p>Thank you for your purchase, come back soon!!!</p>`,
        footer:`<p>Date of purchase : ${new Date().toDateString()}</p>`,
        confirmButtonColor: 'black'},
        cleanCart(),
        cart.forEach( async (item) => {
             const itemRef = doc(DB,'Items',item.id)
             await updateDoc(itemRef,{
              stock: increment(-item.quantity)
             })
        })))
    
    .catch(error => console.log(error));
}

return(
    <>
   
      <div className='cart-container'>
            <div className='title'>
              <h1>CART PRODUCTS</h1>
            </div>
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
              <Button onClick={() => cleanCart(cart)} as="input" type="reset" value="Empty Cart" />
              <Button onClick={() => createOrder(cart)} variant="outline-success" as="input" type="reset" value="Buy Now!" className='buttom-buy' />
            </ListGroup>
          </Card>
        </div>
      </div>
    
     </>
    )

}
 