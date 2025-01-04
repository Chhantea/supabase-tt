import EmploymentList from "@/components/employee/EmploymentList";
import employee from "@/lib/actions/server/employee.actions";
import React from "react";

const page = async () => {
  const serverData = await employee.get();
  return (
    <div>
      <EmploymentList data={serverData} />
    </div>
  );
};

export default page;
