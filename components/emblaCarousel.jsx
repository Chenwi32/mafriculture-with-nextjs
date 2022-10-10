import React, { useEffect } from "react";

import useEmblaCarousel from "embla-carousel-react";

import Autoplay from "embla-carousel-autoplay";

import styles from './compStyles/emblacarousel.module.css'


const EmblaCarousel = () => {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false
    },
        [Autoplay()])
    
    useEffect(() => {
        if (emblaApi) {
            // Embla API is ready
        }

    }, [emblaApi])


    return (
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          <h1 className={styles.embla__slide}>1</h1>
          <h1 className={styles.embla__slide}>2</h1>
          <h1 className={styles.embla__slide}>3</h1>
          <h1 className={styles.embla__slide}>4</h1>
          <h1 className={styles.embla__slide}>5</h1>
          <h1 className={styles.embla__slide}>6</h1>
          <h1 className={styles.embla__slide}>7</h1>
        </div>
      </div>
    );
}

export default EmblaCarousel;