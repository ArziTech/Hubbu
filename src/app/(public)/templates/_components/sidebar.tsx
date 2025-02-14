'use client'

import React from "react";
import Category from "@/app/(public)/templates/_components/category";
import Rating from "@/app/(public)/templates/_components/rating";
import Sort from "@/app/(public)/templates/_components/sort";

const Sidebar = () => {
  return (
    <div>
      <span className={"text-2xl font-semibold text-nowrap mb-3"}>Browse Template</span>
      <Category />
      <Rating></Rating>
      <Sort></Sort>
    </div>
  );
};
export default Sidebar;
