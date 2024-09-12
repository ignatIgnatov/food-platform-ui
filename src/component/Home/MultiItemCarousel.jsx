import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { topMeels } from '../../util/utils';
import CarouselItem from './CarouselItem';

const MuliitemCarousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    };

    return (
        <div>
            <Slider {...settings}>
                {topMeels.map((item) => (
                    <CarouselItem
                        image={item.image}
                        title={item.title}
                    />
                ))}
            </Slider>
        </div>
    )
}

export default MuliitemCarousel