import ItemList from "../ItemList";
import {useState, useEffect} from "react";
import { getProducts } from "../../asyncmock";
import { getProductsByCategory } from "../../asyncmock";
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';

function ItemListContainer() {
    
   const [products, setProducts] = useState([]);
   const { categoryId } = useParams()
   useEffect(() => {

      if(!categoryId){
        getProducts()
          .then(products => {
          setProducts(products)
            })
      }
      else{
        getProductsByCategory(categoryId)
          .then(products => {
          setProducts(products)
        })
      }
        
    }, [categoryId])
 
 
 
 return(
    <div className="box">
     <div>
        {/* <h3>{props}</h3> */}
        {Array.isArray(products) && products.length === 0 ? (
          
          <div className="load"> Cargando Productos...</div>
        
          ): (
        
        <ItemList products={products}/>
      
      )}
        
     </div>
    </div>
        
    )
}

export default ItemListContainer;