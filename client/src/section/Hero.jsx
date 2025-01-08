import { useState } from 'react';
import { HiMenuAlt2 } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import { RiCopperCoinLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { LiaTasksSolid } from "react-icons/lia";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineLeaderboard } from "react-icons/md";
import { PiChatsCircle } from "react-icons/pi";
import { FaSwatchbook } from "react-icons/fa";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { BiPoll } from "react-icons/bi";
import { BiDonateHeart } from "react-icons/bi";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { GrAnnounce } from "react-icons/gr";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { logo, profile, lotus, lotustop } from "../assets";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, onClose }) => {
    const menuItems = [
        { title: 'My Task', icon: LiaTasksSolid },
        { title: 'My Community', icon: IoIosPeople },
        { title: 'Leaderboard', icon: MdOutlineLeaderboard },
        { title: 'Charts', icon: PiChatsCircle },
        { title: 'Courses', icon: FaSwatchbook },
        { title: 'Knowledge', icon: GiGiftOfKnowledge },
        { title: 'Polls', icon: BiPoll },
        { title: 'Contributions', icon: BiDonateHeart },
        { title: 'Quizzes', icon: IoNewspaperOutline },
        { title: 'Updates', icon: GrUpdate }, 
        { title: 'Downloads', icon: MdOutlineSystemUpdateAlt },
        { title: 'News', icon: GrAnnounce },
        { title: "FAQ's", icon: RiQuestionAnswerLine },
        { title: 'Settings', icon: CiSettings },
    ];

    return (
        <div
            className={`fixed top-0 left-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out z-50 flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
            <div className="p-4 border-b pb-10">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 pt-20">
                        <img src={profile} alt="Profile" className="w-14 h-14 rounded-full" />
                        <div>
                            <p className="text-lg font-semibold pb-1">Vikki Jain</p>
                            <div className="flex items-center gap-2 text-gray-600">
                                <MdOutlineWorkOutline />
                                <p className="text-[10px]">Karyasamiti Sadasya</p>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 mb-20 bg-white rounded-full h-8 w-8 flex items-center justify-center border-gray-100 border-2"
                    >
                        <IoMdClose size={20} />
                    </button>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto">
                <nav className="p-4">
                    <ul className="space-y-4">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <button
                                    className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                                >
                                    <item.icon size={20} />
                                    <span>{item.title}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <hr className="border-gray-200  my-4" />
            <div className="flex items-center justify-center pb-24">
                <p className="text-gray-500 text-xs">
                    Version 89799.00
                </p>
            </div>
        </div>
    );
};

const Hero = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <section className="bg-[#C01F101A] rounded-b-3xl relative">
            <div>
                <img src={lotustop} alt="lotustop" className="absolute top-0 left-0 w-10 h-15 z-10" />
            </div>
            <div className="container mx-auto px-5 py-10">
                <div className="flex justify-between items-center">
                    <div
                        className="text-2xl text-gray-600 cursor-pointer h-10 w-10 flex items-center justify-center rounded-full bg-white"
                        onClick={() => setIsSidebarOpen(true)}
                    >
                        <HiMenuAlt2 />
                    </div>
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-10"
                    />
                    <Link to="/profile">
                        <button className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                            <span className="text-gray-600">
                                <IoPersonOutline size={20} />
                            </span>
                        </button>
                    </Link>
                </div>
                <div className="pt-8 flex items-center gap-16 sm:gap-[1200px]">
                    <div className="flex items-center gap-2">
                        <img
                            src={profile}
                            alt="Logo"
                            className="h-14"
                        />
                        <div>
                            <h1 className="text-md font-bold text-red-700">विक्की जैन</h1>
                            <div className="flex items-center pt-1 gap-2">
                                <MdOutlineWorkOutline className="text-gray-600" />
                                <p className="text-xs font-extrabold text-gray-700">कार्यसमिति सदस्य</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-8 p-3 gap-2 bg-white flex items-center justify-center rounded-md text-red-700 z-10">
                        <RiCopperCoinLine size={20} />
                        <p className="font-medium">4000</p>
                    </div>
                </div>
                <div>
                    <img src={lotus} alt="lotus" className="absolute bottom-0 right-1 w h-15" />
                </div>
            </div>

            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />
        </section>
    );
};

export default Hero;