import React from "react";
import { LibraryBig } from "lucide-react";
import Select from "@/app/(public)/templates/_components/select";
import { useQueryState } from "nuqs";
import { useQuery } from "react-query";
import { getAllTemplateCategory } from "@/actions/template-category";

const Category = () => {
  const [category, setCategory] = useQueryState('category')
  const {data:result, isFetching } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllTemplateCategory
  });

  if(result?.status !== 'SUCCESS')
    return <p>{result?.status}{" "}{result?.error}</p>

  return (
    <div>
      <div className={'flex items-center gap-2 my-2'}>
        <LibraryBig className={'inline size-6'} /><span className={'font-medium'}>Categories</span>
      </div>

      <Select
        name={"All Categories"}
        value={null}
        params={category}
        setParams={setCategory}
      />
      {result.data?.map(({ id, title }) =>
        <Select
          key={id}
          name={title}
          value={title}
          params={category}
          setParams={setCategory}
        />
      )}
    </div>
  );
};
export default Category;
