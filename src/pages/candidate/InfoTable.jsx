import React from 'react'
import TableRow from './TableRow'
import TableHeader from './table-header/TableHeader'
import useCandidateInfo from './custom-hook/InfoUsage';


function InfoTable() {
  const {data,isLoading,error, handleVehicleType, handleAmountSelection, handleAmountSort}= useCandidateInfo();
  
  if(isLoading){
    return <div>Loading...</div>
  }
  if(error){
    return <div>Error loading data</div>
  }

  return (
    <div className="overflow-x-auto px-8 py-4 mt-24">
      <div className="flex justify-between items-center mb-4">
        <TableHeader onVehicleTypeChange={handleVehicleType} onAmountChange={handleAmountSelection} onAmountSortChange={handleAmountSort} />
      
      </div>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-blue-400">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider border-b border-r border-blue-300">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider border-b border-r border-blue-300">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider border-b border-r border-blue-300">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider border-b border-r border-blue-300">
              Amount Paid
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider border-b border-r border-blue-300">
              Trial Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider border-b">
              Vehicle Type
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data?.length === 0 ? (
    <tr>
      <td colSpan="6" className="px-6 py-8 text-center text-sm text-gray-500">
        No data found under this filter
      </td>
    </tr>
  ) : (
    data?.map((candidate) => (
      <TableRow key={candidate.id} candidate={candidate} />
    ))
  )}
         
        </tbody>
      </table>
    </div>
  )
}

export default InfoTable