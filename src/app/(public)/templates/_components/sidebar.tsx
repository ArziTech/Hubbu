import Category from "@/app/(public)/templates/_components/category";
// import Rating from "@/app/(public)/templates/_components/rating";
// import Sort from "@/app/(public)/templates/_components/sort";
import { getAllTemplateCategory } from "@/actions/template-category";

const Sidebar = async () => {
  const allCategories =  await getAllTemplateCategory();

  if(!allCategories.data)
    return null;

  return (
    <div>
      <span className={"text-2xl font-semibold text-nowrap mb-3"}>Browse Template</span>
      <Category categories={allCategories.data} />

      {/* TODO: Implement Later*/}
      {/*<Rating></Rating>*/}
      {/*<Sort></Sort>*/}
    </div>
  );
};
export default Sidebar;
