import Item from "../Item";


function ItemList({ products }){
    return (
        <div className="item-list">
            {Array.isArray(products) &&
                   products.map((prod) => {
                         return   <Item key={prod.id} {...prod} />;
              }) }
        </div>
    );
        
};

export  default ItemList;