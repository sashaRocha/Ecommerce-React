import { useState } from "react";
import Button from 'react-bootstrap/Button';
import './ItemCount.css'
function ItemCount ({ stock }) {
    const [counter, setCounter] = useState(0);
    
    const increse = () =>{
        if(counter >= stock){
            setCounter(counter)
        }else{
            setCounter(counter+1)
        }
    };
    const decrese = () =>{
        if(counter <= 1){
            setCounter(counter)
        }else{
            setCounter(counter-1);
        }
    }
    const onAdd = () => setCounter(0);
    
    
    return (
      <div className="item-count">
        <div>{counter}</div>
        <Button variant="outline-danger" type="button" onClick={decrese}>-</Button>
        <Button variant="outline-danger" type="button" onClick={increse}>+</Button>
        <Button variant="primary" onClick={onAdd} >Agregar al Carrito</Button>{' '}
      </div>
    );
}  
    
export default ItemCount;