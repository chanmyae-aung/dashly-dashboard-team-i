import React from 'react'
import TopSellingProducts from './TopSellingProducts'
import RecentOrders from './RecentOrders'

const TableSection = () => {
  return (
    <div className='w-[95%] mx-auto'>
        <div className="flex justify-between gap-7">
            <div className="w-[75%]">
                <TopSellingProducts/>
            </div>
            <div className="w-[23.5%]">
                <RecentOrders/>
            </div>
        </div>
    </div>
  )
}

export default TableSection