import React from "react";
import { useQueryState } from "nuqs";
import { useQuery } from "react-query";
import { getAllTemplateCategory } from "@/actions/template-category";
import { ArrowDownUp, LibraryBig } from "lucide-react";
import Select from "@/app/(public)/templates/_components/select";

const Rating = () => {
  const [sort, setSort] = useQueryState("sort");
  return (
    <div>
      <div className={"my-2 flex items-center gap-2"}>
        <ArrowDownUp className={"inline size-6"} />
        <span className={"font-medium"}>Urutkan</span>
      </div>

      <Select name={"No sort"} value={null} params={sort} setParams={setSort} />
      <Select
        name={"Terbaru"}
        value={"Newest"}
        params={sort}
        setParams={setSort}
      />
      <Select
        name={"Terpopuler"}
        value={"Populer"}
        params={sort}
        setParams={setSort}
      />
    </div>
  );
};
export default Rating;
