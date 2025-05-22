import React from "react";
import { auth } from "@/auth";

const Page = async () => {
  const session = await auth();
  const user = session?.user;
  return <div>Page {user.name}</div>;
};
export default Page;
