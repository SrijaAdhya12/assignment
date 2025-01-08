import React, { useState } from 'react';
import { MdHomeFilled } from "react-icons/md";
import { MdOutlineLeaderboard } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiMapPin2Line } from "react-icons/ri";
import { IoChatbubblesOutline } from "react-icons/io5";

const BottomNav = () => {
    const [activeTab, setActiveTab] = useState('home');

    const navItems = [
        { id: 'home', icon: MdHomeFilled, label: 'Home', color: 'text-red-600' },
        { id: 'leaderboard', icon: MdOutlineLeaderboard, label: 'Leaderboard', color: 'text-red-600' },
        { id: 'community', icon: FaPeopleGroup, label: 'Community', color: 'text-red-600' },
        { id: 'myarea', icon: RiMapPin2Line, label: 'My Area', color: 'text-red-600' },
        { id: 'chats', icon: IoChatbubblesOutline, label: 'Chats', color: 'text-red-600' },
    ];

    return (
        <div className="fixed bottom-0 w-full bg-white border-t rounded-t-3xl  border-gray-200">
            <div className="flex justify-between items-center px-5 py-2">
                {navItems.map(({ id, icon: Icon, label, color }) => (
                    <button
                        key={id}
                        onClick={() => setActiveTab(id)}
                        className="flex flex-col items-center gap-1 px-1 py-2"
                    >
                        <Icon
                            size={24}
                            className={activeTab === id ? color : 'text-gray-600 '}
                        />
                        <span
                            className={`text-xs ${activeTab === id ? color : 'text-gray-400'}`}
                        >
                            {label}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BottomNav;