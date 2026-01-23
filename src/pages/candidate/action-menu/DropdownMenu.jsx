
import { Navigate, useNavigate } from "react-router-dom"


function DropdownMenu({ setOpenDropdown, openDropdown, candidateId }) {

    const navigate = useNavigate();
    const navigateDetails = () => {
    
        navigate(`/candidate/${candidateId}`);
        setOpenDropdown(null);
    }
 
  return (
    <div className="relative inline-block">
      <button
       onClick={() => setOpenDropdown(openDropdown === candidateId ? null : candidateId)}
        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
      >
        <svg
          className="w-5 h-5 text-gray-600"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <circle cx="12" cy="5" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="12" cy="19" r="2" />
        </svg>
      </button>

     {openDropdown === candidateId && (
        <div className="absolute right-0 mt-1 w-24 bg-white border border-gray-200 rounded-md shadow-lg z-10 flex flex-col">
          <button
          onClick={navigateDetails}
          className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 transition-colors">
            See more 
          </button>
          {/* <button className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 transition-colors">
            Delete
          </button> */}
        </div>
      )}
    </div>
  )
}

export default DropdownMenu