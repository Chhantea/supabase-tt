"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import employee from "@/lib/actions/client/employee.actions";
import { useToast } from "../../hooks/use-toast";
import Link from "next/link";

const EachList = ({ item, update }: any) => {
  const { toast } = useToast();

  const onHandleUpdate = async () => {
    const res = await employee.update({
      id: item.id,
      name: "Employment - " + item.id,
    });
    if (res?.status === "OK") {
      update();
      console.log("Success --->", res?.data);
      toast({
        title: "Success",
        description: "Employment updated successfully",
      });
    } else {
      console.log("Error", res?.msg);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: res?.msg,
      });
    }
  };
  const onHandleDelete = async () => {
    const res = await employee.remove({ id: item.id });
    if (res?.status === "OK") {
      update();
      console.log("Success --->", res?.data);
      toast({
        title: "Success",
        description: "Employment deleted successfully",
      });
    } else {
      console.log("Error", res?.msg);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: res?.msg,
      });
    }
  };
  return (
    <li>
      #{item.id} {item.name}
      <Button className="btn btn-primary m-2" onClick={onHandleUpdate}>
        Update
      </Button>
      <Button
        className="btn btn-primary m-2"
        variant={"destructive"}
        onClick={onHandleDelete}
      >
        Delete
      </Button>
      <Link href={`/employee/${item.id}`}>View</Link>
    </li>
  );
};

const EmploymentList = ({ data }: any) => {
  const { toast } = useToast();
  const [lists, setLists] = useState(data !== null ? data : []);

  useEffect(() => {
    if (data !== null) {
      setLists(data);
    } else {
      getData();
    }
  }, []);
  const getData = async () => {
    const res = await employee.get();
    if (res?.status === "OK") {
      setLists(res.data);
    } else {
      console.log("Error", res?.msg);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: res?.msg,
      });
    }
  };
  const onHandleCreate = async () => {
    console.log("create");
    const res = await employee.post({ name: "Employment - " + lists.length });
    if (res?.status === "OK") {
      getData();
      toast({
        title: "Success",
        description: "Employment created successfully",
      });
    } else {
      console.log("Error", res?.msg);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: res?.msg,
      });
    }
  };
  return (
    <div>
      <h4>Employment List</h4>
      <div className="my-2">
        <Button className="btn btn-primary" onClick={onHandleCreate}>
          Add Employment
        </Button>
      </div>
      <ul>
        {lists.map((item: any, index: number) => (
          <EachList key={index} item={item} update={getData} />
        ))}
      </ul>
    </div>
  );
};

export default EmploymentList;
