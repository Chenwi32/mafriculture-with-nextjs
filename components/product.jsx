import Image from "next/image";
import imageLoader from "../imageLoader";
import { useStateValue } from "../libs/stateProvider";

import styles from './compStyles/product.module.css'

const Product = ({ id, title, image, price, rating, reviews }) => {
    

    const dispatch = useStateValue()[1]

    const addToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id,
                image,
                title,
                price,
            }
        })
      
      console.log(id)
    }

    return (
      <div className={`${styles.product}`}>
        <div className={`${styles.image}`}>
          <Image
            src={image}
            alt=""
            width={300}
            height={300}
            loader={imageLoader}
          />
        </div>

        <div className={`${styles.about__product}`}>
          <p className={`${styles.product__details}`}>{title}</p>

          <p>
            <small>XAF</small>
            <strong> {price}</strong>
          </p>

          <div className={`${ styles.buttons} flex flex-a-b mg-s-t `}>
            <button onClick={addToCart} className={`${styles.addtocart} btn`}>
            Add to cart
          </button>

          <button>Learn more</button>
          </div>
          
        </div>
      </div>
    );
}

export default Product;