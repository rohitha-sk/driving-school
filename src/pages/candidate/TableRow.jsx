import React from 'react'

function TableRow({candidate}) {
    const{id,name,email, amount_paid, trial_date, vehicle_type}=candidate;

  return (
     <tr className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">{id}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">{name}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">{email}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">{amount_paid?.toFixed(2) ?? '0.00'}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">{new Date(trial_date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{vehicle_type}</td>
          </tr>
  )
}

export default TableRow