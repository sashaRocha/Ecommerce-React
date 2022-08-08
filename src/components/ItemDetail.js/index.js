import ItemCount from './componentes/ItemCount';

function ItemDetail({ name, stock }){
       const addItem = (quantity) =>{
        console.log(`Agregaste ${quantity} ${name}`)
       }

    return(
        <div>
            <h1>{name}</h1>
            <ItemCount stock={stock} onAdd={addItem}/>
        </div>
    )

}

export default ItemDetail;