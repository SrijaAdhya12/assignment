import { PiFlowerLotusBold } from "react-icons/pi"
import { ViewAllButton } from '../components'
const Events = () => {
  return (
      <section className="container mx-auto px-5 py-10">
          <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                  <PiFlowerLotusBold size={30} className="text-red-700" />
                  <h2 className="text-2xl font-medium">Events</h2>
              </div>
              <ViewAllButton />
          </div>
    </section>
  )
}

export default Events