import { getCandidateById } from '@/services/apiCandidateInfo';
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function CandidateDetails() {

    const { id } = useParams();
    const navigate = useNavigate();
   
    const{ data: candidate, error, isLoading } = useQuery({
        queryKey: ['candidateDetails', id],
        queryFn:()=>getCandidateById(id),
    });

    const{ id: candidateId, name, email, amount_paid, trial_date, vehicle_type } = candidate || {};

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error loading candidate details</div>;
    }



  return (
    <div className="max-w-2xl mx-auto p-6">
         <button 
        onClick={() => navigate('/candidate-info')}
        className="mb-4 flex items-center text-gray-600 hover:text-gray-900 transition-colors"
      >
        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to List
      </button>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Candidate Details</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="px-6 py-4 bg-gray-50 font-medium text-gray-700 w-1/3">ID</td>
              <td className="px-6 py-4 text-gray-900">{candidateId}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-6 py-4 bg-gray-50 font-medium text-gray-700">Name</td>
              <td className="px-6 py-4 text-gray-900">{name}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-6 py-4 bg-gray-50 font-medium text-gray-700">Email</td>
              <td className="px-6 py-4 text-gray-900">{email}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-6 py-4 bg-gray-50 font-medium text-gray-700">Amount Paid</td>
              <td className="px-6 py-4 text-gray-900">${amount_paid}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-6 py-4 bg-gray-50 font-medium text-gray-700">Trial Date</td>
              <td className="px-6 py-4 text-gray-900">{trial_date}</td>
            </tr>
            <tr>
              <td className="px-6 py-4 bg-gray-50 font-medium text-gray-700">Vehicle Type</td>
              <td className="px-6 py-4 text-gray-900">{vehicle_type}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CandidateDetails