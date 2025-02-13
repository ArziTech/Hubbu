import React from "react";
import MaxwidthWrapper from "@/components/global/maxwidth-wrapper";
import { ChevronDown, Search } from "lucide-react";
import { getTemplates } from "@/actions/template";
import TemplateCard from "@/components/global/template-card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import Select from './_components/select'

const Page = async () => {
  const templates = await getTemplates();
  console.log(templates);

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

        <div>
          <span className={"text-2xl font-semibold text-nowrap mb-3"}>Browse Template</span>
          <div>
            <span className={"text-xl font-medium"}>Categories</span>
            <p>All Categories</p>
            <Select name={'Modern'}></Select>
            <Select name={'Islamic'}></Select>
            <Select name={'Culture'}></Select>
            <Select name={'Japanese'}></Select>
            <Select name={'KoreanStyle'}></Select>
            <p>Modern</p>
            <p>Islamic</p>
            <p>Culture</p>
            <p>Japanese</p>
            <p>Korean Style</p>
          </div>
          <div className={"[&_p]:ms-4"}>
            <span className={"text-xl font-medium"}>Rating</span>
            <p> &gt; 5 Stars</p>
            <p> &gt; 4 Stars</p>
          </div>
        </div>
        <div className={"flex flex-col w-full"}>
          <div className={"flex w-full items-center mb-4 justify-between"}>
            <span className={"text-muted-foreground"}>Showing 10 of 100 templates</span>
            <div className={"bg-input h-fit px-2 py-1 rounded-lg"}><Search className={"inline"} /> Search</div>
          </div>

          <div className={"w-full flex flex-wrap justify-between gap-y-8"}>
            {templates.data.map((template) =>
              <TemplateCard key={template.id} template={template}></TemplateCard>
            )}
          </div>

           <div className={"flex  items-center mt-4 justify-end gap-6"}>
            <span className={"text-muted-foreground text-sm text-black"}>Rows per page</span>
            <DropdownMenu>
              <DropdownMenuTrigger className={"flex border rounded-lg p-1"}><span className={'text-sm text-black'}>10</span> <ChevronDown /></DropdownMenuTrigger>
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
