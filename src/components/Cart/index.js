import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function Cart() {
    const {cartData} = useContext(CartContext)

    console.log(cartData);
  return (
    <div className='cart'>
        
          "Hay elementos en el Cart!"
        
    </div>
  )
}

export default Cart;