import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getTotalPrice, getcartItems } from "../../redux/cartSlice";

const Cart = () => {

    const cartItems = useSelector(getcartItems);
    const totalPrice = useSelector(getTotalPrice);

    return (
        <div>
            <img className="cartIcon" alt="icon" src="https://img.icons8.com/?size=160&id=J3q7nJBIq8IE&format=png"/>
            <h2>TOTAL: $ {totalPrice}</h2>
            {cartItems.map((cartItem, name)=> <CartItem key={name} cartItem={cartItem}/>)}
            
        </div>
    )
}

export default Cart;