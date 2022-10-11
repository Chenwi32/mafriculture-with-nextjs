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
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi]);

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={`${styles.embla__container}`}>
        <div className={`${styles.embla__slide2} `}>
          <div className={`${''} container flex`}>
            <div className={`${styles.carousel_text1} flex `}>
              <div className={`${''} flex`}>
                <div className="banner-text">
                  <h1 id="backToTop">
                    <em>M</em>Africulture
                  </h1>

                    <p>
                      There Is Beauty In Everything — <br />
                      African Fashion Is Never An Exception.
                      <br />
                      <strong>Give The African Style A Try!</strong>
                    </p>

                    <p className="feel hide" id="feel">
                      <strong>“FEEL THE ROYALTY”</strong>
                    </p>
                    <p className="hide" id="priority">
                      <strong>
                        <em>Your Satisfaction, Our Priority!</em>
                      </strong>
                    </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.embla__slide} `}>
          <div className={`${styles.embla__slide_container} container flex`}>
            <div className={`${styles.carousel_text} flex_col`}>
              <h2>Latest Product</h2>
              <h3>Small floor flower vase</h3>
              <p>
                This small floor vase, about 40cm high Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Eos animi necessitatibus
                inventore dignissimos aut nesciunt saepe officiis veniam dolor,
                eius quod fugiat magni, amet nemo accusantium obcaecati minus ad
                tenetur?
              </p>
              <Link href="/products">
                <a className="btn">Shop Now</a>
              </Link>
            </div>

            <div className={styles.image}>
              <Image
                src="/images/feature_product1.jpg"
                width={400}
                height={500}
              />
            </div>
          </div>
        </div>

        <div className={`${styles.embla__slide2} `}>
          <div className={`${styles.embla__slide_container} container flex`}>
            <div className={`${styles.carousel_text} flex_col`}>
              <h2>Featured Product</h2>
              <h3>Bowl shaped vase</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quisquam. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Itaque unde aliquam, minima quod officiis a ullam delectus
                iure, veritatis consequatur eos expedita. Soluta sapiente
                maiores necessitatibus itaque id voluptatem est.
              </p>
              <Link href="/products">
                <a className="btn">Learn more</a>
              </Link>
            </div>

            <div className={styles.image}>
              <Image
                src="/images/feature_product.jpg"
                width={400}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
