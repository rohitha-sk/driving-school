import React from 'react'

function PaymentSort({ onAmountSortChange }) {
  return (
    <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 mb-2">Sort by Amount</label>
            <select
            onChange ={(e)=> onAmountSortChange(e.target.value)}
            className="px-4 py-2 h-[42px] bg-gray-100 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer">
              <option value="reset">Reset</option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
          </div>
  )
}

export default PaymentSort