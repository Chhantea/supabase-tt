import { createClient } from "../../../utils/supabase/client";
const get = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("employment")
    .select("*")
    .order("id", { ascending: true });
  if (error) {
    return { status: "ERROR", data: null, msg: error.message };
  }
  if (data) {
    return { status: "OK", data: data, msg: "Success" };
  }
};

const post = async (params: any) => {
  const supabase = await createClient();
  const { data, error } = await supabase.from("employment").insert(params);
  if (error) {
    return { status: "ERROR", data, msg: error.message };
  }
  return { status: "OK", data: null, msg: "Success" };
};

const update = async (params: any) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("employment")
    .update(params)
    .eq("id", params.id);
  if (error) {
    return { status: "ERROR", data, msg: error.message };
  }
  return { status: "OK", data: null, msg: "Success" };
};

const remove = async (params: any) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("employment")
    .delete()
    .eq("id", params.id);
  if (error) {
    return { status: "ERROR", data, msg: error.message };
  }
  return { status: "OK", data: null, msg: "Success" };
};

// const getOne = async (params: any) => {
//   const supabase = await createClient();
//   const { data, error } = await supabase
//     .from("employment")
//     .select("*")
//     .eq("id", params.id);
//   if (error) {
//     return { status: "ERROR", data: null, msg: error.message };
//   }
//   if (data) {
//     return { status: "OK", data: data, msg: "Success" };
//   }
// };

const employee = {
  get,
  post,
  update,
  remove,
  // getOne,
};

export default employee;
