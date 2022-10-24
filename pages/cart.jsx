
import { FlutterWaveButton } from "flutterwave-react-v3";
import Link from "next/link";
import CartItem from "../components/cartItem";
import { useStateValue } from "../libs/stateProvider";

import styles from '../styles/cart.module.css'






const Cart = () => {

const config = {
  public_key: "FLWPUBK_TEST-d74bfa1e066a40c715e80ace1e8c74a6-X",
  tx_ref: Date.now(),
  amount: 100,
  currency: "XAF",
  payment_options: "card,mobilemoney,ussd",
  customer: {
    email: "user@gmail.com",
    phone_number: "070********",
    name: "john doe",
  },
  customizations: {
    title: "my Payment Title",
    description: "Payment for items in cart",
    logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
  },
};
  
    const fwConfig = {
      ...config,
      text: "Pay with Flutterwave!",
      callback: (response) => {
        console.log(response);
        closePaymentModal(); // this will close the modal programmatically
      },
      onClose: () => {},
    };
  

  const { basket } = useStateValue()[0];

  return (
    <div className={`checkout container flex__col ${styles.cart} `}>
      <div className="flex checkout__main">
        <h2 className="checkout__title">
          {basket.length > 0 ? (
            `You have selected ${basket.length} item(s)`
          ) : (
            <div>
              Your shopping cart is empty. Go shopping{" "}
              <Link href="/products">
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

      {<FlutterWaveButton {...fwConfig} />}
    </div>
  );
};

export default Cart;
