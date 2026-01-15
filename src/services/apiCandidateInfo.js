import supabase from "./supabase";

export async function getCandidateInfo(){

let { data: data, error } = await supabase
  .from('candidate-info')
  .select('*')


    if (error) {
    console.error(error);
    throw new Error("Settings could not be loaded");
  } 
  return data;
}