import Image from "next/image";
import imageLoader from "../imageLoader";
import { useStateValue } from "../libs/stateProvider";

const CartItem = ({ id, image, title, price }) => {
    const dispatch = useStateValue()[1]
    const removeFromCart = () => {
        dispatch({
          type: "REMOVE_FROM_CART",
          id: id,
        });
    }
  return (
    <div className="checkoutProduct flex">
      <div className="checkoutProduct__img flex">
        <Image
          src={image}
          alt=""
          width={300}
          height={300}
          loader={imageLoader}
        />
      </div>

      <div className="info flex__col">
        <div>
          <p>{title}</p>
          <p>XAF {price} </p>
        </div>

        <button onClick={removeFromCart} className="btn2">
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default CartItem;