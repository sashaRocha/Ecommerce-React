import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartWidget.css';
import {Link} from 'react-router-dom';
function CartWidget () {
    
    const { totalQuantity } = useContext(CartContext);
    
    
    return (
    
<>  <Link to={`/cart`}>
        <a className="cart_icon" href='sdkjfhsdk'>
            <div className='pulse'>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                <span className="material-symbols-outlined">
                    shopping_cart_checkout {totalQuantity}
                </span>
            </div>
        </a>
    </Link>
</>
    
)}

export default CartWidget;