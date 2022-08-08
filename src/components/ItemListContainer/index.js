import ItemList from "../ItemList";
import {useState, useEffect} from "react";
import { getProducts } from "../../asyncmock";
function ItemListContainer({ props }) {
    
   const [products, setProducts] = useState([]);

   useEffect( () => {
      getProducts().then(products => {
         setProducts(products)
           })
 }, [])
 
 
 
 
 return(
    <div className="box">
     <div>
        <h3>{props}</h3>
        <ItemList products={products}/>
     </div>
    </div>
        
    )
}

export default ItemListContainer;