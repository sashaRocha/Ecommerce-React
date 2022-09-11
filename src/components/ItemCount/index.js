import { useState } from "react";
import Button from 'react-bootstrap/Button';
import './ItemCount.css'


function ItemCount ({ onAddItemsToCart,stock , initial}) {
    const [counter, setCounter] = useState((1));
    
    const increse = () =>{
        if(counter < stock){
        
            setCounter(counter+1)
        }
    };
    const decrese = () =>{
        if(counter > 1){
        
            setCounter(counter-1);
        }
    }
    const onAdd = () => {
       onAddItemsToCart(counter); 
      
    }
   
    return (
    <>
    <div className="item-count">
        <div>{counter}</div>
        <Button variant="outline-danger" type="button" onClick={decrese}>-</Button>
        <Button variant="outline-danger" type="button" onClick={increse}>+</Button>
        <Button variant="primary"  onClick={onAdd} >Agregar al Carrito</Button>{' '}
    </div>
     
    </> 
    );
}  
    
export default ItemCount;