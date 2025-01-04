import employee from "@/lib/actions/server/employee.actions";
import React from "react";

const page = async ({ params: { id } }: SearchParamProps) => {
  const res = await employee.getOne(id);
  console.log("user id = ", id);
  return (
    <div>
      Profile data
      <p>{JSON.stringify(res?.data)}</p>
    </div>
  );
};

export default page;
