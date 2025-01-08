import Slider from 'react-slick';
import { Birthday1, Birthday2 } from '../assets';

const BirthdayCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: '0px',
        className: 'center',
        customPaging: () => (
            <div className="w-2 h-2 rounded-full bg-red-500 mt-4"></div>
        ),
    };

    const cards = [
        {
            image: Birthday1,
            name: 'विक्की जैन',
            designation: 'Padadhukari Prabhari'
        },
        {
            image: Birthday2,
            name: 'विक्की जैन',
            designation: 'Padadhukari Prabhari'
        }
    ];

    return (
        <div className="max-w-4xl mx-auto relative">
            <style>{`
        .slick-slide {
          transition: all 0.3s ease;
          transform: scale(0.8);
          opacity: 0.5;
        }
        .slick-current {
          transform: scale(1);
          opacity: 1;
        }
        .slick-dots {
          bottom: -40px;
        }
        .slick-dots li {
          margin: 0 4px;
        }
        .center .slick-center {
          transform: scale(1.1);
          opacity: 1;
        }
      `}</style>
            <Slider {...settings}>
                {cards.map((card, index) => (
                    <div key={index} className="">
                        <div className="relative rounded-lg overflow-hidden">                           
                            <div className="relative">
                                <img
                                    src={card.image}
                                    alt="Birthday"
                                    className="w-full h-full"
                                />
                                <div className="absolute bottom-10 left-9 p-2 px-5 rounded-md  bg-white  text-center">
                                    <h2 className="text-md font-bold ">{card.name}</h2>
                                    <p className="text-gray-600 text-[10px] flex items-center justify-center">                                            
                                        {card.designation}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default BirthdayCarousel;