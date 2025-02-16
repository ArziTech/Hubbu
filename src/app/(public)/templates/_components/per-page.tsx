'use client'
import React from "react";
import { Input } from "@/components/ui/input";
import { useQueryState } from "nuqs";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const Search = () => {
  const [perPage, setPerPage] = useQueryState('perPage', { defaultValue: "10" })
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="border border-border">
          <span className="text-sm text-black">{perPage}</span> <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {["10", "20", "30", "40", "50"].map((value) => (
          <DropdownMenuItem key={value} onSelect={() => setPerPage(value)}>
            {value}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default Search;
