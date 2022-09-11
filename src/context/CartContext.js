import React, { useEffect, useState } from 'react';

export const CartContext = React.createContext();

export default function CartProvider({children}){
    const[cart,setCart] = useState([]);
    const[totalQuantity, setQuantity] = useState(1);
    const[totalPrice, setPrice] = useState(Number(0))

    useEffect(() => {
        let totalQuantity = 0;
        cart.forEach(prod =>{
            totalQuantity += prod.quantity;
        })
        setQuantity(totalQuantity);
    },[cart]);
     
  useEffect(() => {
     let totalPrice = 0;
     cart.forEach(prod =>{
        totalPrice += (prod.price * prod.quantity);
     })
     setPrice(totalPrice);
  },[cart]);
    const cleanCart = () =>{
        setCart([]);
    }
    const isInCart = (id) => {
        return cart.some(prod => prod.id === id);
    }
    const removeFromCart = (id) => {
        setCart(cart.filter((product) => product.id !== id));
      };
    const addCartItem = (producToAdd) =>{
        if(!isInCart(producToAdd.id)){
             setCart([...cart,producToAdd])
        }
        
    }
    

    return(
        <CartContext.Provider value={{
            addCartItem,
            removeFromCart,
            cart,
            isInCart,
            cleanCart,
            totalQuantity,
            totalPrice
            }}>
            {children}
        </CartContext.Provider>
    )
}

