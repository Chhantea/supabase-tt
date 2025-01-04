import { createClient } from "../../../utils/supabase/server";
const get = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("employment")
    .select("*")
    .order("id", { ascending: true });
  if (error) {
    console.log("Employment get error ----> ", error);
    return null;
  }
  if (data) {
    return data;
  }
};
const getOne = async (employeeId: string) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("employment")
    .select("*")
    .eq("id", employeeId)
    .single();

  if (error) {
    console.error("Error fetching employee data:", error);
    return null;
  }
  return data;
};

const employee = {
  get,
  getOne,
};

export default employee;
