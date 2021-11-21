import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export const CardCarousel = ({screenshots, imageAlt}) => {
            return (
                    screenshots.length > 0 ? (
                        <Carousel infiniteLoop autoPlay interval="3000">
                            {screenshots.map(screenshot => (
                                <div>
                                    <img src={screenshot.image} alt={imageAlt} />
                                </div>
                            ))}
                        </Carousel>
                    ) : <p><strong>Shiii... sem imagens do game meu parça! É o que tem pra hj</strong>🤖</p>
        );
};
