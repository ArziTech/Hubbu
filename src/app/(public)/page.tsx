import Hero from "@/app/(public)/_components/hero";
import Features from "@/app/(public)/_components/features";
import Overview from "@/app/(public)/_components/overview";
import Testimonials from "@/app/(public)/_components/testimonials";
import Cta from "@/app/(public)/_components/cta";

export default function Home() {
  return (
      <main className={'pt-[107px] flex flex-col gap-16'}>
        <Hero></Hero>
        <Features></Features>
        <Overview></Overview>
        <Testimonials></Testimonials>
        <Cta></Cta>
      </main>
  );
}
