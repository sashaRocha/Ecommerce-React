import { useContext, useState } from "react";
import ItemCount from "../ItemCount";
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import {CartContext} from '../../context/CartContext';


function ItemDetail({ name, stock, img ,id,description,price}){

const  [productToCart,setProductToCard] = useState(0);

const { addCartItem } = useContext(CartContext);

    const handleOnAdd = (quantity) =>{
            addCartItem({id, name, quantity,img,description,price})
            setProductToCard(quantity);
        };
       
       
return(
        <div className="item-detail">
            <h1>{name}</h1>
            <img src={img} alt="preview-product"></img>
            <p>${price}</p>                                         
            {productToCart === 0 
                ? <div><ItemCount  onAddItemsToCart={handleOnAdd} stock={stock}/></div>
                : <Link to={'/cart' }>CLICK AQUI PARA IR AL CARRITO</Link>
            }
        </div>
    )
    
}


export default ItemDetail;