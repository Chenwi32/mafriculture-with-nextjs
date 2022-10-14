import React, { useEffect } from "react";

import useEmblaCarousel from "embla-carousel-react";

import Autoplay from "embla-carousel-autoplay";

import styles from "./compStyles/fromclients.module.css";
import Link from "next/link";
import Image from "next/image";

const Fromclients = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      speed: 10,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi]);

  const imageloader = require("../imageLoader.js");

  return (
    <div className={`${styles.embla} container`} ref={emblaRef}>
      <div className={`${styles.embla__container}`}>

        <div className={`${styles.embla__slide} `}>
            <div className={styles.image}>
              <Image
                src="feature_product.jpg"
                width={200}
                height={200}
                loader={imageloader}
                alt="flower vase"
              />
            </div>
        </div>

        <div className={`${styles.embla__slide} `}>
            <div className={styles.image}>
              <Image
                src="feature_product.jpg"
                width={200}
                height={200}
                loader={imageloader}
                alt="flower vase"
              />
            </div>
        </div>

        <div className={`${styles.embla__slide} `}>
            <div className={styles.image}>
              <Image
                src="feature_product.jpg"
                width={200}
                height={200}
                loader={imageloader}
                alt="flower vase"
              />
            </div>
        </div>

        <div className={`${styles.embla__slide} `}>
            <div className={styles.image}>
              <Image
                src="feature_product.jpg"
                width={200}
                height={200}
                loader={imageloader}
                alt="flower vase"
              />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Fromclients;
