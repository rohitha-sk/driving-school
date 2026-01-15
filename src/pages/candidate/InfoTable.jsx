import React from 'react'

function InfoTable() {
  return (
    <div className="overflow-x-auto px-8 py-4 mt-24">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Candidate Information</h1>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-blue-400">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider border-b">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider border-b">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider border-b">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider border-b">
              Amount Paid
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider border-b">
              Trial Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider border-b">
              Vehicle Type
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">John Doe</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">john@example.com</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$500</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2026-01-20</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Car</td>
          </tr>
          <tr className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Jane Smith</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">jane@example.com</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$450</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2026-01-22</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Motorcycle</td>
          </tr>
          <tr className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">3</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Mike Johnson</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">mike@example.com</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$600</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2026-01-25</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Truck</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default InfoTable