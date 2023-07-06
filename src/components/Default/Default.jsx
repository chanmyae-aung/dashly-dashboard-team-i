import React from 'react'
import Navbar from '../Nav/Navbar'
import Charts from './Charts'
import StackedBar from './StackedBar'
import Tabel from './Tabel'
import Users from './Users'

const Default = () => {
  return (
    <div className='flex flex-col gap-10 p-10'>

        <div className="">
            <h1 className='font-bold text-2xl tracking-wide'>Dashboard</h1>
        </div>

        <section>
            <Charts/>
        </section>

        <section>
            <Tabel/>
        </section>

        <section>
            <StackedBar/>
        </section>

        <section>
            <Users/>
        </section>

        <section>
            <div className="mt-5">
                <h5 className='text-sm text-gray-400'>© Dashly. 2023 Webinning.</h5>
            </div>
        </section>
    </div>
  )
}

export default Default