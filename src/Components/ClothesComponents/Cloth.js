import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const Cloth = ({cloth}) => {

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return (
        <div>
            <img alt="images" src={`${cloth.img}.jpeg`}/>
            <h2> {cloth.name} </h2>
            <p>$ {cloth.price} </p>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <button className="add" onClick={() => {dispatch(addItemToCart({cloth, quantity}))}}>Add to cart</button>
        </div>
    )
}

export default Cloth;