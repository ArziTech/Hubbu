import React from "react";
import TemplateCard from "@/components/global/template-card";
import { useSearchParams } from "next/navigation";
import {
  GetTemplateParams,
  GetTemplateReturn,
  getTemplates,
} from "@/actions/template";
import { useQuery } from "react-query";
import { ActionResponse } from "@/lib/types";

const Templates = ({
  templates,
}: {
  templates: ActionResponse<GetTemplateReturn>;
}) => {
  if (templates.status === "ERROR" || !templates.data)
    // TODO: Handle this
    return null;

  if (templates.status === "PENDING")
    // TODO: Handle this
    return null;
  return (
    <>
      {templates.data.templates.map((template) => (
        <TemplateCard
          key={template.id}
          id={template.id}
          title={template.title}
          price={template.price}
          description={template.description}
          category={template.templateCategory.title}
          rating={template.averageRating}
        />
      ))}
    </>
  );
};
export default Templates;
