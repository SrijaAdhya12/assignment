import { PiFlowerLotusBold } from "react-icons/pi"
import { BirthdayCarousel } from "../components"

const Birthdays = () => {
  return (
      <section className="container mx-auto px-5 py-10">
          <div className="flex justify-between items-center pb-8">
              <div className="flex items-center gap-2">
                  <PiFlowerLotusBold size={35} className="text-red-600" />
                  <h2 className="text-2xl font-medium">Birthdays</h2>
              </div>
          </div>
          <BirthdayCarousel />
          <button className="flex text-red-600 font-bold items-center rounded-md border-red-500 justify-center p-4 border w-full mt-12 hover:bg-red-500 hover:text-white transition-all duration-300">
              Upcoming Birthdays
          </button>
    </section>
  )
}

export default Birthdays