import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail.js";
import { useParams } from 'react-router-dom';


import {getProductById} from '../../config.js';

function ItemDetailContainer(){
    const [products,setProduct] = useState();
    const {id} = useParams();
   
    useEffect(() => {
    
        async function getDetail(){
            const productDetail = await getProductById(id)
            setProduct(productDetail);
        }
        getDetail();
    },[id])


    
    return(
    <div >
        <h1 className="title">Detalle De Producto</h1>
        <ItemDetail {...products}/>
    </div>
    )


}

export default ItemDetailContainer;