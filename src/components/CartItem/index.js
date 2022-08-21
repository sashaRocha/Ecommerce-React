// import Button from 'react-bootstrap/Button';
import React, {memo} from 'react';
import Card from 'react-bootstrap/Card';
function CartItem({id,quantity,name, img}){
    return(
<div>
    <Card style={{ width: '18rem' }}>
        <img src={img} alt="holder-img"></img>
        <Card.Body>
           <Card.Title>{name}</Card.Title>
           <Card.Text>
            Cantida: {quantity}
           </Card.Text>
        </Card.Body>
    </Card>
</div>
    )
}

const cartItemMemo = memo(CartItem);

export default cartItemMemo;