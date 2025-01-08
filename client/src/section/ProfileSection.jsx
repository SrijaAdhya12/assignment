import { logo, profile, lotus, lotustop } from "../assets"
import { FaChevronLeft } from "react-icons/fa"
import { FaPowerOff } from "react-icons/fa6"
import { GoPencil } from "react-icons/go"
import { MdOutlineWorkOutline } from "react-icons/md"
import { Link } from "react-router-dom"

const ProfileSection = () => {
  return (
    <section className="bg-[#C01F101A] rounded-b-3xl relative">
      <div>
        <img src={lotustop} alt="lotustop" className="absolute top-0 left-0 w-10 h-15 z-10" />
      </div>
      <div className="container mx-auto px-5 py-10">
        <div className="flex items-center justify-between">
          <Link to="/">
            <button className="flex items-center justify-center w-10 h-10 bg-white text-gray-600 rounded-full">
              <FaChevronLeft />
            </button>
          </Link>
          <div className="flex items-center justify-center w-10 h-10 bg-white text-gray-600 rounded-full">
            <FaPowerOff />
          </div>
        </div>

        <div className="flex items-center justify-center relative">
          <img src={profile} alt="profile" className="w-20 h-20 rounded-full" />
          {/* <div className="fixed z-10 right-48 top-32 flex items-center justify-center w-7 h-7 bg-white rounded-full border-red-500 border-2">
            <GoPencil />
          </div> */}
        </div>

        <div className="flex flex-col items-center my-4 justify-center">
          <h1 className="text-3xl font-bold">Vikki Jain</h1>
          <p className="flex items-center gap-2 justify-center text-gray-600">
            <MdOutlineWorkOutline />
            <span>Karyasamiti Sadasya</span>
          </p>
        </div>
      </div>
      <div>
        <img src={lotus} alt="lotus" className="absolute bottom-0 right-1 h-15" />
      </div>
    </section>
  )
}

export default ProfileSection