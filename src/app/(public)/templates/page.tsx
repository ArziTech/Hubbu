import MaxwidthWrapper from "@/components/global/maxwidth-wrapper";
import { Loader } from "lucide-react";
import { getTemplates, GetTemplateParams } from "@/actions/template";
import Search from "@/app/(public)/templates/_components/search";
import { useQuery } from "react-query";
import { useSearchParams } from "next/navigation";
import Templates from "@/app/(public)/templates/_components/templates";
import LoadingAnimation from "@/components/global/loading-animation";
import PerPage from "@/app/(public)/templates/_components/per-page";
import Pagination from "@/app/(public)/templates/_components/pagination";
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
