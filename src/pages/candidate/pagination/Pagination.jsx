import React from 'react'
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../../constants';

function Pagination({count}) {

    const[searchParams,setSearchParams] = useSearchParams();

   const currentPage = !searchParams.get('page') ? 1 : parseInt(searchParams.get('page'));
   const pageCount = Math.ceil(count / PAGE_SIZE);

   function NextPage(){
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }
  function PreviousPage(){
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  return (
    <tr>
      <td colSpan="6">
        <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-t border-gray-200">
          {/* Left side - Results info */}
          <div className="text-sm text-gray-700">
            Showing <span className="font-medium">{ (currentPage - 1) * PAGE_SIZE + 1 }</span> to <span className="font-medium">{ currentPage === pageCount ? count : currentPage * PAGE_SIZE }</span> of <span className="font-medium">{count}</span> results
          </div>

          {/* Right side - Navigation buttons */}
          <div className="flex space-x-2">
            <button
            onClick={PreviousPage}
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>
            <button
            onClick={NextPage}
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
              Next
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </td>
    </tr>
  )
}

export default Pagination