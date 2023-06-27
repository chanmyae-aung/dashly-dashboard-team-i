import React from 'react'
import Charts from './Charts'
import Tabel from './Tabel'

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
    </div>
  )
}

export default Default