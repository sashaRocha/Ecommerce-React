// import Button from 'react-bootstrap/Button';
import React, {memo} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import  {CartContext}  from '../../context/CartContext';


function CartItem({id,quantity,name, img}){
    const {removeFromCart} = useContext(CartContext);
    return(
<div>
    <Card style={{ width: '18rem' }}>
        {/* <img src={img} alt="holder-img"></img> */}
        <Card.Img variant="top" src={img} />
        <Card.Body>
           <Card.Title>{name}</Card.Title>
           <Card.Text>
                Cantida: {quantity}
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