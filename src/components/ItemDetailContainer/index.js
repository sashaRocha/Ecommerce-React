import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail.js";
import { useParams } from 'react-router-dom';
import {getProductById} from '../../asyncmock.js';

function ItemDetailContainer(){
    const [products,setProduct] = useState();
    const {productId} = useParams();
    
    useEffect(() => {
        getProductById(productId)
        .then(product => {
            setProduct(product)
        })
       
}, [productId])
    
    return(
    <div>
        <h1>Detalle De Producto</h1>
        <ItemDetail {...products}/>
    </div>
    )


}

export default ItemDetailContainer;