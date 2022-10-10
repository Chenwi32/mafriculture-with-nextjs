import React, { useEffect } from "react";

import useEmblaCarousel from "embla-carousel-react";

import Autoplay from "embla-carousel-autoplay";


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
        <div ref={emblaRef }>
            <div>
                <h1>1</h1>
                <h1>2</h1>
                <h1>3</h1>
                <h1>4</h1>
                <h1>5</h1>
                <h1>6</h1>
                <h1>7</h1>
            </div>
        </div>
    );
}

export default EmblaCarousel;