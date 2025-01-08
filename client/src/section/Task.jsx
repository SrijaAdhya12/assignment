import React from 'react'
import { Taskbox } from '../components'
import { PiFlowerLotusBold } from "react-icons/pi"
import { ViewAllButton } from '../components'
const Task = () => {
  return (
      <section className="container mx-auto px-5 py-10">
          <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                  <PiFlowerLotusBold size={35} className="text-red-600" /> 
              <h2 className="text-2xl font-medium">Tasks</h2>
              </div>
              <ViewAllButton/>
          </div>
          <div className='my-5'>
              <Taskbox/>
          </div>
    </section>
  )
}

export default Task