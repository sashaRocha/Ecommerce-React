import React, { useEffect, useState } from 'react';

export const CartContext = React.createContext();

export default function CartProvider({children}){
    const[cart,setCart] = useState([]);
    const[totalQuantity, setQuantity] = useState(1);

    useEffect(() => {
        let totalQuantity = 0;
        cart.forEach(prod =>{
            totalQuantity += prod.quantity;
        })
        setQuantity(totalQuantity);
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
            totalQuantity
            }}>
            {children}
        </CartContext.Provider>
    )
}

