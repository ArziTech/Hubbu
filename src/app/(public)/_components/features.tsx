import React from "react";
import MaxwidthWrapper from "@/components/global/maxwidth-wrapper";
import { PaintbrushVertical } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Features = () => {
  return (
    <section className={"w-full"}>
      <MaxwidthWrapper>
        <div className="border border-border">
          <h2 className={"text-3xl w-full font-semibold py-2 text-primary text-center"}>Fitur-fitur</h2>
          <Separator></Separator>
          <div className="flex flex-col tablet:flex-row tablet:h-96 bg-card items-center justify-center tablet:py-6">
            <div className={"flex flex-col items-center justify-center w-full tablet:h-fit min-h-[300px] space-y-4 p-4 desktop:px-6"}>

              <PaintbrushVertical className={"mx-auto size-16 text-primary"}></PaintbrushVertical>
              <p className={"text-primary font-medium text-[22px] desktop:text-2xl text-center"}>Kemudahan kostumisasi</p>
              <p className={"text-center opacity-75"}>
                Dengan berbagai komponen dan blok yang dapat dikombinasikan dengan mudah, pengguna dapat menyesuaikan tampilan sesuai keinginan.
              </p>
            </div>
            <div className={"min-h-px w-full tablet:min-h-full  tablet:w-px desktop:mx-4 bg-border"}></div>
            <div className={"flex flex-col items-center justify-center  w-full tablet:h-fit min-h-[300px] space-y-4 p-4 desktop:px-6"}>

              <PaintbrushVertical className={"mx-auto size-16 text-primary"}></PaintbrushVertical>
              <p className={"text-primary font-medium text-[22px] desktop:text-2xl text-center"}>Berbagai pilihan desain</p>
              <p className={"text-center opacity-75"}>
                Menyediakan berbagai opsi desain yang  modern, seusai dengan keinginan masing-masing pasangan.
              </p>
            </div>
            <div className={"min-h-px w-full tablet:min-h-full  tablet:w-px desktop:mx-4 bg-border"}></div>
            <div className={"flex flex-col items-center justify-center  w-full tablet:h-fit min-h-[300px] space-y-4 p-4 desktop:px-6"}>

              <PaintbrushVertical className={"mx-auto size-16 text-primary"}></PaintbrushVertical>
              <p className={"text-primary font-medium text-[22px] desktop:text-2xl text-center"}>Ramah lingkungan dan hemat biaya</p>
              <p className={"text-center opacity-75"}>
                Dengan biaya yang murah tidak perlu lagi mencetak banyak undangan. Yang baik untuk lingkungan.
              </p>
            </div>

          </div>
        </div>
      </MaxwidthWrapper>
    </section>
  );
};
export default Features;
