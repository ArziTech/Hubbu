import React from "react";
import { useQueryState } from "nuqs";
import { Star } from "lucide-react";
import Select from "@/app/(public)/templates/_components/select";

const Rating = () => {
  const [rating, setRating] = useQueryState("rating");
  return (
    <div>
      <div className={"my-2 flex items-center gap-2"}>
        <Star className={"inline size-6"} />
        <span className={"font-medium"}>Sort</span>
      </div>

      <Select
        name={"All Rating"}
        value={null}
        params={rating}
        setParams={setRating}
      />
      <Select
        name={" > 5 stars"}
        value={"5"}
        params={rating}
        setParams={setRating}
      />
      <Select
        name={" > 4 stars"}
        value={"4"}
        params={rating}
        setParams={setRating}
      />
    </div>
  );
};
export default Rating;
