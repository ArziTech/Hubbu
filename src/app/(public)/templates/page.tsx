import React from "react";
import MaxwidthWrapper from "@/components/global/maxwidth-wrapper";
import { ChevronDown, Search } from "lucide-react";
import { getTemplates, GetTemplateType } from "@/actions/template";
import TemplateCard from "@/components/global/template-card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import Select from './_components/select'
import Sidebar from "@/app/(public)/templates/_components/sidebar";
import { prisma } from "@/lib/prisma";
import { ActionResponse } from "@/lib/types";

const Page = async () => {

  // this should be on client, cause it will be dynamic in browser
  const templates: ActionResponse<GetTemplateType[]> = await getTemplates();
  // const categories= await prisma.templateCategory.findMany({});
  // console.log(categories);

  if (templates.status === "ERROR" || !templates.data)
    // TODO: Handle this
    return null;

  if (templates.status === "PENDING")
    // TODO: Handle this
    return null;

  return (
    <section className={"w-full"}>
      <MaxwidthWrapper>
        <div className={"flex pt-32 gap-16"}>
          <Sidebar />
          <div className={"flex flex-col w-full"}>
            <div className={"flex w-full items-center mb-4 justify-between"}>
              <span className={"text-muted-foreground"}>Showing 10 of 100 templates</span>
              <div className={"bg-input h-fit px-2 py-1 rounded-lg"}><Search className={"inline"} /> Search</div>
            </div>

            <div className={"w-full grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-4 "}>
              {templates.data.map((template) =>
                <TemplateCard
                  key={template.id}
                  id={template.id}
                  title={template.title}
                  price={template.price}
                  description={template.description}
                  category={template.templateCategory.title}
                  rating={template.averageRating}
                />
              )}
            </div>

             <div className={"flex  items-center mt-4 justify-end gap-6"}>
              <span className={"text-muted-foreground text-sm text-black"}>Rows per page</span>
              <DropdownMenu>
                <DropdownMenuTrigger className={"flex border rounded-lg p-1"}>
                  <span className={'text-sm text-black'}>10</span> <ChevronDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>10</DropdownMenuItem>
                  <DropdownMenuItem>20</DropdownMenuItem>
                  <DropdownMenuItem>30</DropdownMenuItem>
                  <DropdownMenuItem>40</DropdownMenuItem>
                  <DropdownMenuItem>50</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <span className={"text-muted-foreground text-sm text-black"}>page 1 of 10</span>
              <Pagination className={'mx-0 justify-end flex-grow-0 w-fit'}>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>

          </div>
        </div>
      </MaxwidthWrapper>
    </section>
  );
};
export default Page;
