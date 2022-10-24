import Product from "../components/product";
import styles from '../styles/products.module.css'
const Procuts = () => {
  return (
    <div className={`${styles.products} `}>
      <div className="container grid">
        <Product
          title="Floor Vase"
          image="feature_product1.jpg"
          price={7000}
          id={1}
        />
        <Product
          title="Floor Vase"
          image="feature_product1.jpg"
          price={7000}
          id={2}
        />
        <Product
          title="Floor Vase"
          image="feature_product1.jpg"
          price={7000}
          id={3}
        />
        <Product
          title="Floor Vase"
          image="feature_product1.jpg"
          price={7000}
          id={4}
        />
        <Product
          title="Floor Vase"
          image="feature_product1.jpg"
          price={7000}
          id={5}
        />
        <Product
          title="Floor Vase"
          image="feature_product1.jpg"
          price={7000}
          id={6}
        />
      </div>
    </div>
  );
};

export default Procuts;
