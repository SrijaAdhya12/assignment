import { PiFlowerLotusBold } from "react-icons/pi"
import { BirthdayCarousel } from "../components"

const Birthdays = () => {
  return (
      <section className="container mx-auto px-5 py-10">
          <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                  <PiFlowerLotusBold size={35} className="text-red-700" />
                  <h2 className="text-2xl font-medium">Birthdays</h2>
              </div>
          </div>
          <BirthdayCarousel />
          <button className="flex items-center rounded-md border-red-500 justify-center p-4 border w-full mt-5">
              Upcoming Birthdays
          </button>
    </section>
  )
}

export default Birthdays