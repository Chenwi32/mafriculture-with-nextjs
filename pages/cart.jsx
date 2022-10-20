import Link from "next/link";
import CartItem from "../components/cartItem";
import { useStateValue } from "../libs/stateProvider";

const Cart = () => {
  const { basket } = useStateValue()[0];

  return (
    <div className="checkout container flex__col">
      <div className="flex checkout__main">
        <h2 className="checkout__title">
          {basket.length > 0 ? (
            `You have selected ${basket.length} item(s)`
          ) : (
            <div>
              Your shopping cart is empty. Go shopping{" "}
              <Link href='/products'>
                <button className="btn">Shop now</button>
              </Link>
            </div>
          )}
        </h2>
        <div className="checkout__left">
          <div>
            {/* Basket items */}
            {basket.map((item, index) => (
              <CartItem
                key={index}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
