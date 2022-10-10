import React, { useEffect } from "react";

import useEmblaCarousel from "embla-carousel-react";

import Autoplay from "embla-carousel-autoplay";

import styles from "./compStyles/emblacarousel.module.css";
import Link from "next/link";
import Image from "next/image";

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      speed: 10,
    },
    [Autoplay({ delay: 10000, stopOnInteraction: false })]
  );

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi]);

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        <div className={`${styles.embla__slide} `}>
          <div className={`${styles.embla__slide_container} container flex`}>
            <div className={`${styles.carousel_text} flex_col`}>
              <h2>Latest Product</h2>
              <h3>Small floor flower vase</h3>
              <p>This small floor vase, about 40cm high</p>
              <Link href="/products">
                <a className="btn">Shop Now</a>
              </Link>
            </div>
            <Image
              src="/images/feature_product1.jpg"
              width={400}
              height={500}
            />
          </div>
        </div>
        <div className={`${styles.embla__slide2} `}>
          <div className={`${styles.embla__slide_container} container flex`}>
            <div className={`${styles.carousel_text} flex_col`}>
              <h2>Featured Product</h2>
              <h3>Bowl shaped vase</h3>
              <p></p>
              <Link href="/products">
                <a className="btn">Learn more</a>
              </Link>
            </div>
            <Image src="/images/feature_product.jpg" width={400} height={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
