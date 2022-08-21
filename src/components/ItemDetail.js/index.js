import { useContext, useState } from "react";
import ItemCount from "../ItemCount";
// import Item from '../Item';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import {CartContext} from '../../context/CartContext';




function ItemDetail({ name, stock, img , initial,id}){
   
   
    
    const  [productToCart,setProductToCard] = useState(0);

    const { addCartItem } = useContext(CartContext);

    const handleOnAdd = (quantity) =>{
            addCartItem({id, name, quantity})
            console.log("evento recibido",id);
            setProductToCard(quantity);
        };
       
       
    


    return(
        <div className="item-detail">
            <h1>{name}</h1>
            <img src={img} alt="preview-product"></img>
            {productToCart === 0 
                ? <ItemCount  onAddItemsToCart={handleOnAdd} stock={stock}/>
                : <Link to={'/cart' }>CLICK AQUI PARA IR AL CARRITO</Link>
            }
         </div>
    )
    
    }


export default ItemDetail;