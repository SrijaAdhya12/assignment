import { HiMenuAlt2 } from "react-icons/hi"
import { IoPersonOutline } from "react-icons/io5"
import { MdOutlineWorkOutline } from "react-icons/md"
import { RiCopperCoinLine } from "react-icons/ri"
import { logo, profile, lotus, lotustop } from "../assets"
const Hero = () => {
  return (
      <section className="bg-yellow-100 rounded-b-3xl relative">
          <div>
              <img src={lotustop} alt="lotustop" className="absolute top-0 left-0 w-10 h-15 z-10" />
          </div>
          <div className="container mx-auto px-5 py-10">
          <div className="flex justify-between items-center">
              <div className="text-2xl text-gray-600 cursor-pointer h-10 w-10 flex items-center justify-center rounded-full bg-white">
                  <HiMenuAlt2 />
              </div>
                  <img
                      src= {logo}
                      alt="Logo"
                      className="h-10"
                  />

              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                  <span className="text-gray-600">
                      <IoPersonOutline size={20}/>
                  </span>
              </div>
              </div>
              <div className="pt-8 flex items-center gap-14 sm:gap-[1300px]">
                  <div className="flex items-center gap-4">
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
      </section>
  )
}

export default Hero