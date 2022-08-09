import ItemCount from "../ItemCount";

function ItemDetail({ name, stock, img}){
       
    return(
        <div >
            <h1>{name}</h1>
            <img src={img} alt="preview-product"></img>
            <ItemCount stock={stock} />
         </div>
    )

}

export default ItemDetail;