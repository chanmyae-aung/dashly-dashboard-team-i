import React from 'react'
import { BiTrendingDown, BiTrendingUp } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import ExpenseChart from './ExpenseChart'

const TotalExpense = () => {
  return (
    <div className="bg-white rounded-lg p-5">
    <div className="flex justify-between items-center">
      <h3 className="text-sm font-bold mb-5">TOTAL EXPENSE</h3>
      <BsThreeDotsVertical />
    </div>
    <div className='flex justify-between pt-4'>
    <div>
        <h2 className="text-3xl font-bold">$102,194</h2>
        <div className="flex gap-2">
        <p className="text-red-500 bg-red-100 text-xs flex items-center font-bold w-fit rounded"> <BiTrendingDown/> 7%</p>
        <p className="text-xs text-gray-400">from $109,887</p>
        </div>
      </div>
      <div>
        <ExpenseChart/>
      </div>
    </div>
    </div>
  )
}

export default TotalExpense