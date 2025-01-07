import React from "react";
import Slider from "react-slick";
import { carausalimage2 } from "../assets"; 
import { CiLocationOn } from "react-icons/ci"
const events = [
    {
        id: 1,
        title: "Terapanth Sthapna Divas",
        location: "Ahmedabad",
        date: {
            day: "17",
            month: "December",
            year: "2024"
        },
        image: carausalimage2
    },
    {
        id: 2,
        title: "Terapanth Sthapna Divas",
        location: "Ahmedabad",
        date: {
            day: "17",
            month: "December",
            year: "2024"
        },
        image: carausalimage2
    }
];

export function EventCarousel() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1.1, 
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
        focusOnSelect: true,
        centerPadding: "0",
    };

    return (
        <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
            <Slider {...settings} className="event-carousel">
                {events.map((event) => (
                    <div key={event.id} className="p-1">
                        <div className="border-0 rounded-lg ">
                            <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute top-4 right-4 bg-white rounded-lg p-2">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold">{event.date.day}</div>
                                        <div className="text-sm">{event.date.month}</div>
                                        <div className="text-sm">{event.date.year}</div>
                                    </div>
                                </div>
                                <button className="absolute bottom-4 right-4 bg-red-600 text-white rounded-md py-2 px-4">
                                    Register <br/>
                                    Now
                                </button>
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                                <div className="flex items-center text-gray-600">
                                        <CiLocationOn size={20} className="mr-2" />
                                    <span className="text-sm ">{event.location}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default EventCarousel;
