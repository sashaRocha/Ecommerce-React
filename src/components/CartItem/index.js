// import Button from 'react-bootstrap/Button';
import React, {memo} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import  {CartContext}  from '../../context/CartContext';


function CartItem({id,name, img,price,description}){
    const {removeFromCart} = useContext(CartContext);
    return(
<div>
    <Card style={{ width: '12rem' }}>
        {/* <img src={img} alt="holder-img"></img> */}
        <Card.Img variant="top" src={img} />
        <Card.Body>
           <Card.Title>{name}</Card.Title>
           <Card.Text>
                Precio: ${price}
           </Card.Text>
           <Button onClick={() => removeFromCart(id)} >
                Remove
            </Button>
        </Card.Body>
    </Card>
</div>
    )
}

const cartItemMemo = memo(CartItem);

export default cartItemMemo;