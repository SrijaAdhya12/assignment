import React from "react";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa";
import { update1, update2, update3, update4 } from "../assets";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.5,
                },
            },
        ],
    };

    const slides = [
        {
            title: "कार्यसमिति बैठक",
            description:
                "17 अप्रैल 2024 तारीख 8 बजे सैफूल सिंग कार्यसमिति समूह में पोस्ट कर दिया गया है",
            textColor: "text-white",
            bgImage: update1,
            arrowColor: "text-black",
        },
        {
            title: "कार्यसमिति बैठक",
            description:
                "17 अप्रैल 2024 तारीख 8 बजे सैफूल सिंग कार्यसमिति समूह में पोस्ट कर दिया गया है",
            textColor: "text-black",
            bgImage: update2,
            arrowColor: "text-[#FFB39D]",
        },
        {
            title: "कार्यसमिति बैठक",
            description:
                "17 अप्रैल 2024 तारीख 8 बजे सैफूल सिंग कार्यसमिति समूह में पोस्ट कर दिया गया है",
            textColor: "text-black",
            bgImage: update3,
            arrowColor: "text-[#FFDE97]",
        },
        {
            title: "View All",
            description: "",
            bgImage: update4,
            textColor: "text-black",
            arrowColor: "text-[#FFB39D]",
        },
    ];

    return (
        <div className="pt-10 max-w-screen-lg mx-auto">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="px-2">
                        <div
                            className={`h-72 md:h-64 rounded-lg flex flex-col justify-between p-5 ${slide.textColor}`}
                            style={{
                                backgroundImage: `url(${slide.bgImage})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <h3 className="text-xl font-bold mt-5">{slide.title}</h3>
                            {slide.description && (
                                <p className="text-xs leading-7 mt-8 md:mt-8">
                                    {slide.description}
                                </p>
                            )}
                            <button className="mt-auto mb-4 text-md flex items-center gap-12">
                                <span className="font-medium">More info</span>
                                <span
                                    className={`transition-transform transform hover:scale-110 bg-white rounded-md p-2`}
                                >
                                    <FaArrowRight className={`${slide.arrowColor}`} />
                                </span>
                            </button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
