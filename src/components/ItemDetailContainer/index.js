import { useState, useEffect } from "react";
import { getProducts } from "../../asyncmock";
import ItemDetail from "../ItemDetail.js";
function ItemDetailContainer(){
    const [products,setProducts] = useState();
    
    useEffect(() => {
            getProducts()
            .then(products => {
                setProducts(products)
                 })
       }, [])
    
    return(
    <div>
        <h1>Detalle</h1>
        <ItemDetail {...products}/>
    </div>
    )


}

export default ItemDetailContainer;