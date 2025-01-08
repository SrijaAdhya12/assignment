import React, { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carausalimage } from "../assets";

const Carousel = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1.3,
        slidesToScroll: 1,
        draggable: true,
        arrows: false,
        centerMode: true,
        centerPadding: "0px",
        beforeChange: (current, next) => setActiveSlide(next),
    };

    const slides = [
        {
            id: 1,
            title: "महातपस्वी की मंगल सत्रिधि में आयोजित हुआ ज्ञानशाला दीक्षांत समारोह",
            image: carausalimage,
            time: "3 mins ago",
        },
        {
            id: 2,
            title: "महातपस्वी की मंगल सन्निधि में आयोजित हुआ ज्ञानशाला दीक्षान्त समारोह",
            image: carausalimage,
            time: "3 mins ago",
        }
    ];

    return (
        <div className="w-full max-w-4xl mx-auto px-4">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={slide.id} className="py-4 px-2 relative">
                        {activeSlide !== index && (
                            <div className="absolute inset-0  bg-opacity-50 rounded-xl z-10"></div>
                        )}
                        <div
                            className={`relative bg-gray-800 text-white rounded-xl overflow-hidden shadow-lg ${activeSlide !== index ? "opacity-80" : "opacity-100"
                                }`}
                        >
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-72 object-cover rounded-xl"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4 rounded-xl">
                                <span
                                    className={`text-sm px-2 py-1 font-medium rounded-md self-start ${activeSlide === index
                                        ? "bg-white text-red-700 "
                                        : "bg-gray-500 text-gray-300"
                                        } ml-auto`}
                                >
                                    {slide.time}
                                </span>

                                <h2
                                    className={`font-bold ${activeSlide === index ? "text-lg" : "text-sm"}`}
                                >
                                    {slide.title}
                                </h2>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="p-4">
                    <div
                        className="flex flex-col gap-4 items-center justify-center bg-gray-900 text-white rounded-xl h-72 shadow-lg opacity-90"
                        style={{
                            backgroundImage: `url(${carausalimage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        <h1 className="text-2xl font-bold ">View All</h1>
                        <button className="bg-red-700 px-6 py-4 text-white rounded-xl flex items-center gap-2">
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;
