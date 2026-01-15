import React from 'react'

function PaymentFilter({ onAmountChange }) {
  return (
    <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 mb-2">Filter by Amount</label>
            <div className="flex bg-gray-100 p-1 rounded-lg divide-x divide-gray-300">
              <button
              onClick={()=>onAmountChange(30000)}
               className="px-4 py-2 text-sm font-medium text-gray-700 rounded-l-md hover:bg-orange-100 hover:text-orange-600 focus:outline-none focus:bg-orange-500 focus:text-white active:bg-orange-500 active:text-white transition-colors">
                Less than 30000
              </button>
              <button
              onClick={()=>onAmountChange(40000)}
               className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-600 focus:outline-none focus:bg-orange-500 focus:text-white active:bg-orange-500 active:text-white transition-colors">
                Less than 40000
              </button>
              <button
               onClick={()=>onAmountChange("all")}
               className="px-4 py-2 text-sm font-medium text-gray-700 rounded-r-md hover:bg-orange-100 hover:text-orange-600 focus:outline-none focus:bg-orange-500 focus:text-white active:bg-orange-500 active:text-white transition-colors">
                All
              </button>
            </div>
          </div>
  )
}

export default PaymentFilter