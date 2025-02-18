import React from "react";
import MaxwidthWrapper from "@/components/global/maxwidth-wrapper";
import { PaintbrushVertical } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Features = () => {
  return (
    <section className={"w-full"}>
      <MaxwidthWrapper>
        <div className="border border-border">
          <h2
            className={
              "w-full py-2 text-center text-3xl font-semibold text-primary"
            }
          >
            Fitur-fitur
          </h2>
          <Separator></Separator>
          <div className="flex flex-col items-center justify-center bg-card tablet:h-96 tablet:flex-row tablet:py-6">
            <div
              className={
                "flex min-h-[300px] w-full flex-col items-center justify-center space-y-4 p-4 tablet:h-fit desktop:px-6"
              }
            >
              <PaintbrushVertical
                className={"mx-auto size-16 text-primary"}
              ></PaintbrushVertical>
              <p
                className={
                  "text-center text-[22px] font-medium text-primary desktop:text-2xl"
                }
              >
                Kemudahan kostumisasi
              </p>
              <p className={"text-center opacity-75"}>
                Dengan berbagai komponen dan blok yang dapat dikombinasikan
                dengan mudah, pengguna dapat menyesuaikan tampilan sesuai
                keinginan.
              </p>
            </div>
            <div
              className={
                "min-h-px w-full bg-border tablet:min-h-full tablet:w-px desktop:mx-4"
              }
            ></div>
            <div
              className={
                "flex min-h-[300px] w-full flex-col items-center justify-center space-y-4 p-4 tablet:h-fit desktop:px-6"
              }
            >
              <PaintbrushVertical
                className={"mx-auto size-16 text-primary"}
              ></PaintbrushVertical>
              <p
                className={
                  "text-center text-[22px] font-medium text-primary desktop:text-2xl"
                }
              >
                Berbagai pilihan desain
              </p>
              <p className={"text-center opacity-75"}>
                Menyediakan berbagai opsi desain yang modern, seusai dengan
                keinginan masing-masing pasangan.
              </p>
            </div>
            <div
              className={
                "min-h-px w-full bg-border tablet:min-h-full tablet:w-px desktop:mx-4"
              }
            ></div>
            <div
              className={
                "flex min-h-[300px] w-full flex-col items-center justify-center space-y-4 p-4 tablet:h-fit desktop:px-6"
              }
            >
              <PaintbrushVertical
                className={"mx-auto size-16 text-primary"}
              ></PaintbrushVertical>
              <p
                className={
                  "text-center text-[22px] font-medium text-primary desktop:text-2xl"
                }
              >
                Ramah lingkungan dan hemat biaya
              </p>
              <p className={"text-center opacity-75"}>
                Dengan biaya yang murah tidak perlu lagi mencetak banyak
                undangan. Yang baik untuk lingkungan.
              </p>
            </div>
          </div>
        </div>
      </MaxwidthWrapper>
    </section>
  );
};
export default Features;
