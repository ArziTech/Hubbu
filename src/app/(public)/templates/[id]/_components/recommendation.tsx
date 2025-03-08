"use client";
import React from "react";
import MaxwidthWrapper from "@/components/global/maxwidth-wrapper";
import TemplateCard from "@/components/global/template-card";
import { useQuery } from "@tanstack/react-query";
import { GetTemplateParams, getTemplates } from "@/actions/template";

const Recommendation = () => {
  const category: string = "";
  const sortBy: string = "";
  const rating: string = "";
  const perPage: string = "4";

  const params: GetTemplateParams = {
    perPage,
    rating,
    category,
    sortBy,
  };

  const { data: templates, isFetching } = useQuery({
    queryKey: ["products", perPage, category, sortBy, rating],
    queryFn: () => getTemplates(params),
    initialData: {
      status: "PENDING",
    },
  });

  if (!templates || templates.status === "ERROR") return null;
  return (
    <section className={"mt-12 w-full"}>
      <MaxwidthWrapper className={"flex flex-col gap-5"}>
        <h3 className={"text-2xl font-semibold"}>
          Browse other template you might like
        </h3>
        <div className="grid grid-cols-4 gap-2">
          {templates.data?.templates.map((template) => (
            <TemplateCard
              key={template.id}
              {...template}
              category={template.templateCategory.title}
              rating={template.averageRating}
            />
          ))}
        </div>
      </MaxwidthWrapper>
    </section>
  );
};
export default Recommendation;
