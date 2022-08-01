import ItemList from "../ItemList";
import ItemCount from "../ItemCount";
import {useState, useEffect} from "react";
function ItemListContainer({ props }) {
    
   const [items, setItems] = useState([]);
   useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => setItems(data))
 }, [])
 return(
    <div className="box">
     <div>
        <h3>{props}</h3>
        <ItemList items={items}/>
        <ItemCount stock="5" initial="1" />
     </div>
    </div>
        
    )
}

export default ItemListContainer;