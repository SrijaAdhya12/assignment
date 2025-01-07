import React from 'react'
import { Taskbox } from '../components'
import { PiFlowerLotusBold } from "react-icons/pi"
const Task = () => {
  return (
      <section className="container mx-auto px-5 py-10">
          <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                  <PiFlowerLotusBold size={30} className="text-red-700" /> 
              <h2 className="text-2xl font-medium">Tasks</h2>
              </div>
              <button className="bg-red-700 text-white px-6 py-2 rounded-md">View All</button>
          </div>
          <div className='my-5'>
              <Taskbox/>
          </div>
    </section>
  )
}

export default Task