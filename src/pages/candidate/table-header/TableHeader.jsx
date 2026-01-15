import React from 'react'
import VehicleTypeFilter from './VehicleTypeFilter'
import PaymentFilter from './PaymentFilter'
import PaymentSort from './PaymentSort'


function TableHeader({ onVehicleTypeChange , onAmountChange, onAmountSortChange}) {

 

  return ( 
    <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 self-start">Candidate Information</h1>
        <div className="flex space-x-8 mb-4">
          <VehicleTypeFilter  onVehicleTypeChange={onVehicleTypeChange}  />
          <PaymentFilter onAmountChange={onAmountChange} />
          <PaymentSort onAmountSortChange={onAmountSortChange} />
         
        </div>

    </div>
  )
}

export default TableHeader