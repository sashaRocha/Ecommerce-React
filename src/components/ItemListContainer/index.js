import ItemList from "../ItemList";
import {useState, useEffect} from "react";
import { getProducts } from "../../config";
import { getProductsByCategory } from "../../config";
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';


function ItemListContainer() {

const [products, setProducts] = useState([]);

const  {categoryId}  = useParams();
useEffect(() => {

      setProducts([]);
       
        async function getD() {
          const productInfo = await getProducts(categoryId)
          setProducts(productInfo);
        }
      getD();
      
        async function getI(){
          const productList = await getProductsByCategory(categoryId)
          setProducts(productList)
        }
      getI();
      
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