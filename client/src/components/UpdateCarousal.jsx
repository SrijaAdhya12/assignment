import React from "react";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa"
import { update1, update2, update3, update4 } from "../assets";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
            arrowColor: "text-black"
        },
        {
            title: "कार्यसमिति बैठक",
            description:
                "17 अप्रैल 2024 तारीख 8 बजे सैफूल सिंग कार्यसमिति समूह में पोस्ट कर दिया गया है",
            textColor: "text-black",
            bgImage: update2, 
            arrowColor: "text-[#FFB39D]"
            
        },
        {
            title: "कार्यसमिति बैठक",
            description:
                "17 अप्रैल 2024 तारीख 8 बजे सैफूल सिंग कार्यसमिति समूह में पोस्ट कर दिया गया है",
            textColor: "text-black",
            bgImage: update3, 
            arrowColor: "text-[#FFDE97]"
        },
        {
            title: "View All",
            description: "",
            bgColor: "bg-[#FFD6D6]",
            textColor: "text-black",
            bgImage: update4, 
            arrowColor: "text-[#FFB39D]"
        },
    ];

    return (
        <div className="p-4">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="px-2">
                        <div
                            className={`h-64 rounded-lg flex flex-col justify-between p-5 ${slide.bgColor} ${slide.textColor}`}
                            style={{
                                backgroundImage: `url(${slide.bgImage})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <h3 className="text-lg font-bold mt-2">{slide.title}</h3>
                            {slide.description && (
                                <p className="text-xs leading-6 mt-8">{slide.description}</p>
                            )}
                            <button className="mt-auto text-sm flex items-center gap-10">
                                <span className="font-thin text-lg">More info</span>
                                <span className="transition-transform transform group-hover:translate-x-1 bg-white rounded-md p-2">
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
