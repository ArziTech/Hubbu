'use client'
import React from "react";
import { Input } from "@/components/ui/input";
import { useQueryState } from "nuqs";

const Search = () => {
  const [search, setSearch] = useQueryState('search', { defaultValue: "" })
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Input
        type="text"
        id="search"
        placeholder={"Search"}
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />
    </div>
  );
};
export default Search;
