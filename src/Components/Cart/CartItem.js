import { useDispatch } from "react-redux";
import dataClothes from "../../dataClothes";
import { removeItemFromCart } from '../../redux/cartSlice';


const CartItem = ({cartItem}) => {
    
    const clothes = dataClothes.find(item => item.id === cartItem.clothId)
    const dispatch = useDispatch()

    return (
        <div>
            <h3> {clothes.name} </h3>
            <p> {cartItem.quantity} item(s) </p>
            <p>Price: $ {clothes.price * cartItem.quantity} </p>
            <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
            <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="icon"/> 
            </span>
        </div>
    )
}

export default CartItem;