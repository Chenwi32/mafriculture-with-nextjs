import Head from "next/head";
import EmblaCarousel from "../components/emblaCarousel";
import Fromclients from "../components/fromclients";
import HorizontalScrolling from "../components/horizontalScrolling";
import NewestProduct from "../components/newestProduct";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    
      <div className={styles.container}>
        <Head>
          <title>MAfriculture</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div>
          <EmblaCarousel />

          <NewestProduct />

          <div className=" container mg-v ">
            <h2 className={`mg-b ${""}`}>Featured Products</h2>

            <p className="mg-s-b">
              Have you seen these awesome vases from our collection yet?
            </p>

            <HorizontalScrolling />
          </div>

          <div className="container mg-v">
            <h2 className={`mg-b ${""}`}>Feedback from our Customers</h2>
            <p>
              We take so much pride in the satisfaction of our clients, it is
              our top priority.
            </p>
            <p className="mg-s-b">
              {" "}
              These images came in from our satisfied customers:
            </p>

            <Fromclients />
          </div>
        </div>
      </div>
  );
}
