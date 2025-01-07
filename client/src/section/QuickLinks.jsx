import { PiFlowerLotusBold } from "react-icons/pi"
import { BiPoll } from "react-icons/bi"
import { GiSpellBook } from "react-icons/gi"
import { IoDownloadOutline } from "react-icons/io5";
import { BiDonateHeart } from "react-icons/bi";
import { SiGoogleforms } from "react-icons/si";
import { MdQuestionAnswer } from "react-icons/md";
const QuickLinks = () => {
    const quickLinks = [
        {
            id: 1,
            name: "Poll",
            icon: <BiPoll size={25} className="text-gray-600"/>
        },
        {
            id: 2,
            name: "Knowledge",
            icon: <GiSpellBook size={25} className="text-gray-600"/>
        },
        {
            id: 3,
            name: "Download",
            icon: <IoDownloadOutline size={25} className="text-gray-600"/>
        },
        {
            id: 4,
            name: "Contribute",
            icon: <BiDonateHeart size={25} className="text-gray-600"/>
        },
        {
            id: 5,
            name: "Forms",
            icon: <SiGoogleforms size={25} className="text-gray-600"/>
        },
        {
            id: 6,
            name: "FAQs",
            icon: <MdQuestionAnswer size={25} className="text-gray-600"/>
        },
    ]
  return (
    <section className="container mx-auto px-5 py-10">
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
                <PiFlowerLotusBold size={35} className="text-red-700" />
                <h2 className="text-2xl font-medium">Quick Links</h2>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3 mt-5  p-5 rounded-3xl bg-white shadow-xl">
              {quickLinks.map((link) => (
                  <div className="flex flex-col items-center justify-center">
              <button className="flex items-center rounded-full border-gray-300 justify-center w-16 h-16 border ">
                  {link.icon}
                      </button>
                      <p className="text-gray-800 text-sm">{link.name}</p>
                  </div>
              ))}
          </div>
    </section>
  )
}

export default QuickLinks