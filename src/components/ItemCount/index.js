import { useState } from "react";
import Button from 'react-bootstrap/Button';
function ItemCount ({ stock }) {
    const [counter, setCounter] = useState(0);
    
    const sumar = () =>{
        if(counter >= stock){
            setCounter(counter)
        }else{
            setCounter(counter+1)
        }
    };
    const restar = () =>{
        if(counter <= 1){
            setCounter(counter)
        }else{
            setCounter(counter-1);
        }
    }
    const reset = () => setCounter(0);
    
    
    return (
      <div id="conteiner">
        <div>{counter}</div>
        <Button  variant="outline-danger" type="button" onClick={restar}>
          - 
        </Button>
        <Button  variant="outline-danger" type="button" onClick={sumar}>
          +
        </Button>
  
        <Button variant="primary" onClick={reset} > 
        
          Agregar al Carrito
        </Button>{' '}
      </div>
    );
}  
    
export default ItemCount;