import { PAGE_SIZE } from '../pages/constants';
import supabase from './supabase'

export async function getCandidateInfo(filters, page) {

  const{vehicleType , amountPaid, amountSort} = filters;

  let query = supabase.from('candidate-info').select('*', { count: 'exact' });

  // Filter by vehicle type if not 'all'
  if (vehicleType && vehicleType !== 'all') {
    query = query.eq('vehicle_type', vehicleType);
  }

  if (amountPaid && amountPaid !== 'all') {
    query = query.lt('amount_paid', amountPaid);
  }
  if (amountSort === 'ascending') {
    query = query.order('amount_paid', { ascending: true });
  } else if (amountSort === 'descending') {
    query = query.order('amount_paid', { ascending: false });
  }

    if(page){
    const from = ( page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }


  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error('Candidates could not be loaded');
  }

  return { data, count };
}