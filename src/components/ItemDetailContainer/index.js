import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail.js";
import { useParams } from 'react-router-dom';


// import {getProductById} from '../../config.js';
import { getDoc, doc } from "firebase/firestore";
import { DB } from "../../api/APIFirebase.js";

// resolve(DATA.find(prod => prod.id === id));
function ItemDetailContainer(){
    const [products,setProduct] = useState();
    const {id} = useParams();
   
    useEffect(() => {
    
       const detailRef = doc(DB,'Items','Ce5lVHNGxIRBOl9tTA8B')
        getDoc(detailRef)
            .then((snapshot) => {
            if(snapshot.exists()){
                setProduct({ ...snapshot.data()})
            }
        })
    },[id])
    return(
    <div >
        <h1 className="title">Detail Product</h1>
        <ItemDetail {...products}/>
    </div>
    )


}

export default ItemDetailContainer;