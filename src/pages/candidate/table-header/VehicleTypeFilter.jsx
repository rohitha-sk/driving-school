import React from 'react'

function VehicleTypeFilter({onVehicleTypeChange }) {



  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-600 mb-2">Filter by Vehicle Type</label>
      <div className="flex bg-gray-100 p-1 rounded-lg divide-x divide-gray-300">
          <button 
          onClick={() => onVehicleTypeChange('all')}
          className="cursor-pointer px-4 py-2 text-sm font-medium text-gray-700 rounded-l-md hover:bg-blue-100 hover:text-blue-600 focus:outline-none focus:bg-blue-500 focus:text-white active:bg-blue-500 active:text-white transition-colors">
            All
          </button>
          <button 
          onClick={() => onVehicleTypeChange('car')}
          className="cursor-pointer px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-600 focus:outline-none focus:bg-blue-500 focus:text-white active:bg-blue-500 active:text-white transition-colors">
            Car
          </button>
          <button 
          onClick={() => onVehicleTypeChange('bike')}
          className="cursor-pointer px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-600 focus:outline-none focus:bg-blue-500 focus:text-white active:bg-blue-500 active:text-white transition-colors">
            Bike
          </button>
          <button 
          onClick={() => onVehicleTypeChange('threewheel')}
          className="cursor-pointer px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-600 focus:outline-none focus:bg-blue-500 focus:text-white active:bg-blue-500 active:text-white transition-colors">
            Threewheel
          </button>
          <button 
          onClick={() => onVehicleTypeChange('bus')}
          className="cursor-pointer px-4 py-2 text-sm font-medium text-gray-700 rounded-r-md hover:bg-blue-100 hover:text-blue-600 focus:outline-none focus:bg-blue-500 focus:text-white active:bg-blue-500 active:text-white transition-colors">
            Bus
          </button>
           <button 
          onClick={() => onVehicleTypeChange('van')}
          className="cursor-pointer px-4 py-2 text-sm font-medium text-gray-700 rounded-r-md hover:bg-blue-100 hover:text-blue-600 focus:outline-none focus:bg-blue-500 focus:text-white active:bg-blue-500 active:text-white transition-colors">
            Van
          </button>
      </div>
    </div>
  )
}

export default VehicleTypeFilter