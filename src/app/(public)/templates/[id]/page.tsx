import React from "react";
import { GetTemplateById } from "@/actions/template";
import MaxwidthWrapper from "@/components/global/maxwidth-wrapper";
import { Images, Star } from "lucide-react";
import Rating from "@/components/global/rating";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Description from "./_components/description";
import Recommendation from "@/app/(public)/templates/[id]/_components/recommendation";
import notFound from "@/app/not-found";
import Link from "next/link";

async function Page({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const result = await GetTemplateById(id);

  if (result.status === "ERROR" || !result.data) return notFound();

  const { template } = result.data;

  return (
    <>
      <section className={"w-full pt-32"}>
        <MaxwidthWrapper className={"flex gap-5"}>
          <div className="grid h-[572px] w-full place-content-center rounded-lg border bg-[#D9D9D9]">
            <Images />
          </div>
          <div className={"flex-grow border-r border-border bg-border"} />
          <div className={"flex w-full flex-grow flex-col justify-between"}>
            <div className="w-full space-y-2">
              <h2 className={"text-5xl font-semibold text-primary"}>
                {template.title}
              </h2>
              <Badge>{template.templateCategory.title}</Badge>
              <div className="flex w-full items-center gap-4">
                <Rating score={template.averageRating} />
                <span className={"text-muted-foreground"}>10.323 reviews</span>
                <span className={"text-muted-foreground"}>
                  ({template.purchasedTime} terjual)
                </span>
              </div>
              <p className={"text-3xl font-bold text-accent"}>
                Rp. {template.price.toLocaleString("id-ID")}
              </p>
              {/* Render list image preview here */}
              <div className="flex gap-2">
                {Array.from({ length: 3 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="grid size-20 place-content-center rounded-lg border bg-[#D9D9D9]"
                  >
                    <Images />
                  </div>
                ))}
              </div>
              <Description description={template.description}></Description>
            </div>

            <div className={"flex w-full gap-4"}>
              {/* TODO */}
              <Button asChild className={"w-full"}>
                <Link href={`/transactions/${template.id}`}>
                  Buy this template
                </Link>
              </Button>
              <Button asChild className={"w-full"}>
                <Link href={`/preview/${template.id}`}>Preview</Link>
              </Button>
            </div>
          </div>
        </MaxwidthWrapper>
      </section>

      {/* Render recommendation here*/}
      <Recommendation></Recommendation>
    </>
  );
}
export default Page;
