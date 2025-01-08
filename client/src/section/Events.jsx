import { PiFlowerLotusBold } from "react-icons/pi"
import { ViewAllButton, EventCarousal } from '../components'
const Events = () => {
  return (
      <section className="container mx-auto px-5 py-10">
          <div className="flex justify-between items-center my-7">
              <div className="flex items-center gap-2">
                  <PiFlowerLotusBold size={35} className="text-red-600" />
                  <h2 className="text-2xl font-medium">Events</h2>
              </div>
              <ViewAllButton />
          </div>
          <EventCarousal />
    </section>
  )
}

export default Events