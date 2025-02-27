import MaxwidthWrapper from "@/components/global/maxwidth-wrapper";
import Sidebar from "@/app/(public)/templates/_components/sidebar";
import TemplateList from "@/app/(public)/templates/_components/template-list";

const Page = () => {
  return (
    <section className={"w-full"}>
      <MaxwidthWrapper>
        <div className={"flex gap-16 pt-32"}>
          <Sidebar />
          <TemplateList />
        </div>
      </MaxwidthWrapper>
    </section>
  );
};
export default Page;
