"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function Page() {
  const [notes, setNotes] = useState<any[] | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const getData = async () => {
      const user = await supabase.auth.getUser();
      console.log("chk user --->", user);
      const { data, error } = await supabase.from("notes").select();
      if (error) console.log(error);
      setNotes(data);
    };
    getData();
  }, []);

  return <pre>{JSON.stringify(notes, null, 2)}</pre>;
}