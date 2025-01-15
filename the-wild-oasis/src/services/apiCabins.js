import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error("Cabnis could not be loaded");
    throw new Error("Cabnis could not be loaded");
  }

  return data;
}
