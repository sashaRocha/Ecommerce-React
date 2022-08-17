import { useState } from "react";
import ItemCount from "../ItemCount";
// import Item from '../Item';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
// import {CartContext} from '../../context/CartContext';




function ItemDetail({ name, stock, img , initial,id}){
    // const {addCartItem} = useContext(CartContext);
   
    
    const  [productToCart,setProductToCard] = useState(false);
    const onAdd = (id) =>{
            // addCartItem(id);
            console.log("evento recibido",id);
            setProductToCard(true);
        };
       
       
    


    return(
        <div className="item-detail">
            <h1>{name}</h1>
            <img src={img} alt="preview-product"></img>
            {productToCart ? <Link to={'/cart' }>Se agrego un producto!</Link> : (
            <ItemCount 
            onAddItemsToCart={onAdd}
            stock={stock} 
            initial={initial}
            />
            )}
         </div>
    )
    
    }


export default ItemDetail;