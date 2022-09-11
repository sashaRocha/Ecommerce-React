import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail.js";
import { useParams } from 'react-router-dom';
import {  doc, getDoc} from "firebase/firestore";
import { DB } from "../../api/APIFirebase.js";


function ItemDetailContainer(){
    const [products,setProduct] = useState();
    const {productId} = useParams();
   
    useEffect(() => {
    
       const detailRef = doc(DB,'Items',productId)
        getDoc(detailRef)
            .then((snapshot) => {
            if(snapshot.exists()){
                setProduct({...snapshot.data()})
            }
        })
    },[productId])

    return(
    <div >
       <h1 className="title">Detail Product</h1>
       <ItemDetail {...products}/>
    </div>
    )


}

export default ItemDetailContainer;