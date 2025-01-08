import React from 'react';
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineMapPin } from "react-icons/hi2";
import { CiBellOn } from "react-icons/ci";
import { BiDonateHeart } from "react-icons/bi";
import { FaRegNoteSticky } from "react-icons/fa6";
import { IoMdThumbsUp } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineFeedback } from "react-icons/md";
import { CiHeadphones } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { GoChevronRight } from "react-icons/go";

const ProfileBox = () => {
  const options = [
    { name: "Profile", description: "Update and modify your profile", icon: IoPersonOutline },
    { name: "My Area", description: "Update and modify your profile", icon: HiOutlineMapPin },
    { name: "Notification", description: "Turn on or off notification", icon: CiBellOn },
    { name: "My Contribution", description: "Update and modify your profile", icon: BiDonateHeart },
    { name: "My Notes", description: "Update and modify your profile", icon: FaRegNoteSticky },
    { name: "My Scores", description: "Update and modify your profile", icon: IoMdThumbsUp },
    { name: "Contact", description: "Update and modify your profile", icon: FaPhoneAlt },
    { name: "Feedback", description: "Update and modify your profile", icon: MdOutlineFeedback },
    { name: "Support", description: "Update and modify your profile", icon: CiHeadphones },
    { name: "Settings", description: "Update and modify your profile", icon: CiSettings },
  ];

  return (
    <div className="p-6 flex flex-col gap-4">
      {options.map((option) => (
        <div key={option.name} className="flex items-center justify-between p-2 bg-white rounded-md shadow-md border border-gray-200">
          <div className="flex items-center gap-4">
            <option.icon size={55} className=" text-gray-500 bg-red-100 rounded-md p-4" />
            <div>
              <h3 className="text-sm font-semibold text-red-500">{option.name}</h3>
              <p className="font-thin text-sm text-gray-500">{option.description}</p>
            </div>
          </div>
            <GoChevronRight className='text-gray-500' />
        </div>
      ))}
    </div>
  );
};

export default ProfileBox;