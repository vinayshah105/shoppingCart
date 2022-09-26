import React from "react";
import Carousel from 'react-bootstrap/Carousel';

export default function CarouselFade() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-75"
                    src="assets/Home/poster1.jpg" alt="Women's Fashion"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-75"
                    src="assets/Home/poster11.jpg"
                    alt="Men's Fashion"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-75"
                    src="assets/Home/poster2.jpg"
                    alt="Women's Fashion"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-75"
                    src="assets/Home/poster5.jpg"
                    alt="Men's Fashion"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-75"
                    src="assets/Home/poster22.png"
                    alt="Men's Fashion"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-75"
                    src="assets/Home/poster3.jpg"
                    alt="Women's Fashion"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-75"
                    src="assets/Home/poster33.png"
                    alt="kids Fashion"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-75"
                    src="assets/Home/poster4.jpg"
                    alt="kids Fashion"
                />
            </Carousel.Item>
        </Carousel>
    );
}
