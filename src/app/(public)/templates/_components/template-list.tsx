'use client'
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

  const params: GetTemplateParams = { search, perPage, rating, category, sortBy, page };

  const { data: templates, isFetching } = useQuery({
    queryKey: ["products", search, perPage, category, sortBy, rating, page],
    queryFn: () => getTemplates(params),
    initialData: {
      status: "PENDING"
    }
  });

  if (!templates || templates.status === "ERROR")
    return null;
  return (
    <div className={"flex flex-col w-full"}>

             <div className={"flex w-full items-center mb-4 justify-between"}>
               {
                 isFetching
                   ?
                   <LoadingAnimation className={'text-muted-foreground text-base font-normal'} />
                   :
                   <span className={"text-muted-foreground"}>
                  Showing {templates.data?.templates.length} of {templates.data?.totalTemplate} templates
                </span>
               }
               <Search />
            </div>
      {
        isFetching
          ?
          <Loader className={"relative mx-auto desktop:col-span-3 tablet:col-span-2 col-span-1  animate-spin"} />
          :
          <>
                  <div className={"w-full grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-4 "}>
                      <Templates templates={templates} />
                  </div>

                  <div className={"flex flex-wrap justify-end gap-2 my-4"}>
                    <div className={'space-x-2'}>
                      <span className={"text-muted-foreground text-sm text-black"}>Rows per page</span>
                      <PerPage />
                      <span className={"text-muted-foreground text-sm text-black"}>
                        page {templates.data?.currentPage} of {templates.data?.totalPages}
                      </span>
                    </div>
                    <Pagination
                      totalItems={templates.data?.totalPages as number}
                      perPage={parseInt(perPage)}
                      totalPage={templates.data?.totalPages as number}
                    />
                  </div>
                </>
      }

          </div>
  );
};
export default TemplateList;
