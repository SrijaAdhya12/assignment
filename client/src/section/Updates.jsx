import { PiFlowerLotusBold } from "react-icons/pi"
import { UpdateCarousal } from "../components"
const Updates = () => {
  return (
      <section className="container mx-auto px-5 py-5">
          <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                  <PiFlowerLotusBold size={35} className="text-red-700" />
                  <h2 className="text-2xl font-medium">Updates</h2>
              </div>
          </div>
          <UpdateCarousal />
    </section>
  )
}

export default Updates