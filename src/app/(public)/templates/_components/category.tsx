"use client";
import React from "react";
import { LibraryBig } from "lucide-react";
import Select from "@/app/(public)/templates/_components/select";
import { useQueryState } from "nuqs";
import { TemplateCategory } from "@prisma/client";

const Category = ({ categories }: { categories: TemplateCategory[] }) => {
  const [category, setCategory] = useQueryState("category");

  return (
    <div>
      <div className={"my-2 flex items-center gap-2"}>
        <LibraryBig className={"inline size-6"} />
        <span className={"font-medium"}>Categories</span>
      </div>

      <Select
        name={"All Categories"}
        value={null}
        params={category}
        setParams={setCategory}
      />
      {categories.map(({ id, title }) => (
        <Select
          key={id}
          name={title}
          value={title}
          params={category}
          setParams={setCategory}
        />
      ))}
    </div>
  );
};
export default Category;
