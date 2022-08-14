import {  useState } from "react";
import ItemCount from "../ItemCount";
import Item from '../Item';
import { Link } from 'react-router-dom';
function ItemDetail({ name, stock, img , initial,id}){
       const  [productToCart,setProductToCard] = useState(false);
       const onAdd = (quantityToAdd) =>{
             Item({id, quantity: quantityToAdd})
            setProductToCard(true);
        };
       
    
    return(
        <div >
            <h1>{name}</h1>
            <img src={img} alt="preview-product"></img>
            {productToCart ? <Link to={'/cart' }>Se agrego un producto!</Link> : (
            <ItemCount 
            onAddItems={onAdd}
            stock={stock} 
            initial={initial}
            />
            )}
         </div>
    )
    
    }





    
    


export default ItemDetail;