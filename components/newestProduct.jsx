import Image from "next/image";
import Link from "next/link";
import imageLoader from "../imageLoader";
import styles from "./compStyles/newest.module.css";

const NewestProduct = () => {
  return (
    <div className={`container flex-a-t flex mg-v pd ${styles.newest_container}`}>
      <div className={` ${styles.newest_image}`}>
        <Image
          src="newest.jpg"
          width={700}
          height={700}
          loader={imageLoader}
          alt="floor vase"
        />
      </div>

      <div className={` pd ${styles.newest_text}`}>
        <h2 className={`mg-b ${""}`}>MAfriculture Newest Product</h2>
        <p className={`mg-b ${""}`}>
          We present to you our new floor size flower vase adding to our
          collection of awesome designs that will make your home or office very
          pleasant to be in. <br />
          It is available right now and you can just directly place an order
          here.
        </p>

        <Link href="/products">
          <a className="btn">Learn more</a>
        </Link>

        <p className="mg-v">
          Talk to our customer service one-on-one on whastapp{" "}
          <a
            target="blank"
            rel="noopener noreferrer"
            href="https://wa.me/message/MVX754UDQKRGJ1"
          >
            here
          </a>
        </p>
      </div>
    </div>
  );
};

export default NewestProduct;
