import React, { useState } from 'react';


export const CartContext = React.createContext([]);



export default function CartCustomContext({children}){

    const[cart,setCart] = useState([]);

    const addCartItem = (id) =>{
        const listaProductos = [...cart,id];
        console.log('>> item agregado', id);
        setCart(listaProductos);
    }

    return(
        <CartContext.Provider value={{addCartItem, cartData: cart}}>
            {children}
        </CartContext.Provider>
    )
}

