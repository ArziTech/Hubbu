"use client";
import React from "react";
import LoadingAnimation from "@/components/global/loading-animation";
import Search from "@/app/(public)/templates/_components/search";
import { Loader } from "lucide-react";
import Templates from "@/app/(public)/templates/_components/templates";
import PerPage from "@/app/(public)/templates/_components/per-page";
import { useSearchParams } from "next/navigation";
import { GetTemplateParams, getTemplates } from "@/actions/template";
import { useQuery } from "react-query";
import Pagination from "@/app/(public)/templates/_components/pagination";

const TemplateList = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const perPage = searchParams.get("perPage") || "10";
  const category = searchParams.get("category") || "";
  const sortBy = searchParams.get("sortBy") || "";
  const rating = searchParams.get("rating") || "";
  const page = searchParams.get("page") || "1";

  const params: GetTemplateParams = {
    search,
    perPage,
    rating,
    category,
    sortBy,
    page,
  };

  const { data: templates, isFetching } = useQuery({
    queryKey: ["products", search, perPage, category, sortBy, rating, page],
    queryFn: () => getTemplates(params),
    initialData: {
      status: "PENDING",
    },
  });

  if (!templates || templates.status === "ERROR") return null;
  return (
    <div className={"flex w-full flex-col"}>
      <div className={"mb-4 flex w-full items-center justify-between"}>
        {isFetching ? (
          <LoadingAnimation
            className={"text-base font-normal text-muted-foreground"}
          />
        ) : (
          <span className={"text-muted-foreground"}>
            Showing {templates.data?.templates.length} of{" "}
            {templates.data?.totalTemplate} templates
          </span>
        )}
        <Search />
      </div>
      {isFetching ? (
        <Loader
          className={
            "relative col-span-1 mx-auto animate-spin tablet:col-span-2 desktop:col-span-3"
          }
        />
      ) : (
        <>
          <div
            className={
              "grid w-full grid-cols-1 gap-4 tablet:grid-cols-2 desktop:grid-cols-3"
            }
          >
            <Templates templates={templates} />
          </div>

          <div className={"my-4 flex flex-wrap justify-end gap-2"}>
            <div className={"space-x-2"}>
              <span className={"text-sm text-black text-muted-foreground"}>
                Rows per page
              </span>
              <PerPage />
              <span className={"text-sm text-black text-muted-foreground"}>
                page {templates.data?.currentPage} of{" "}
                {templates.data?.totalPages}
              </span>
            </div>
            <Pagination
              totalItems={templates.data?.totalPages as number}
              perPage={parseInt(perPage)}
              totalPage={templates.data?.totalPages as number}
            />
          </div>
        </>
      )}
    </div>
  );
};
export default TemplateList;
