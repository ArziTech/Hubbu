import React from "react";
import MaxwidthWrapper from "@/components/global/maxwidth-wrapper";
import TransactionForm from "./_components/form";
import { auth } from "@/auth";
import { getTemplateById } from "@/actions/template";
import { ActionResponse } from "@/lib/types";
import { Template } from "@prisma/client";
import notFound from "@/app/not-found";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const session = await auth();
  const id = (await params).id;
  // TODO: Check the template id here

  const response: ActionResponse<Template> = await getTemplateById(id);
  if (response.status !== "SUCCESS") return notFound();

  const template = response.data as Template;

  return (
    <div className={"mt-24 h-full"}>
      <MaxwidthWrapper className={"flex flex-col gap-12"}>
        <TransactionForm template={template} user={session?.user} />
      </MaxwidthWrapper>
    </div>
  );
};
export default Page;
