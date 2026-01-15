import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useSearchParams } from 'react-router-dom';
import { getCandidateInfo } from '../../../services/apiCandidateInfo';

function useCandidateInfo() {
     const[searchParams,setSearchParams]= useSearchParams();

       const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const selectedVehicleType = searchParams.get('vehicleType') || 'all';
  const selectedAmountPaid = searchParams.get('amountPaid') || 'all';
  const selectedAmountSort = searchParams.get('amountSort') || 'reset';

  function handleVehicleType(type) {
    if(type === 'all') {
      searchParams.delete('vehicleType');
      setSearchParams(searchParams);
      return;
    }

    searchParams.set('vehicleType', type);
    setSearchParams(searchParams);
  }

  function handleAmountSelection(amount) {
    if( amount === 'all') {
      searchParams.delete('amountPaid');
      setSearchParams(searchParams);
      return;
    }
      searchParams.set('amountPaid', amount);
      setSearchParams(searchParams);

  }

  function handleAmountSort(sortOrder){
    if(sortOrder === 'reset'){
      searchParams.delete('amountSort');
      setSearchParams(searchParams);
      return;
    }
    searchParams.set('amountSort', sortOrder);
    setSearchParams(searchParams);
  }

  const filters = {
    vehicleType: selectedVehicleType,
    amountPaid: selectedAmountPaid,
    amountSort: selectedAmountSort
  }


  const{data:queryData,isLoading,error}= useQuery({
    queryKey: ['candidateData', filters, page],
    queryFn:  () => getCandidateInfo(filters, page),
  });

  const data = queryData?.data || [];
  const count = queryData?.count || 0;

  return {data,isLoading,error, handleVehicleType, handleAmountSelection, handleAmountSort, count};
}

export default useCandidateInfo;