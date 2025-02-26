import React from "react";
import MaxwidthWrapper from "@/components/global/maxwidth-wrapper";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Check, Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  // TODO: Check the template id here

  return (
    <div className={"mt-24 min-h-full"}>
      <MaxwidthWrapper className={"flex flex-col gap-12"}>
        <div>
          <h2 className={"mb-3 text-2xl font-semibold"}>Detail Pemesanan</h2>
          <div
            className={
              "flex w-full flex-col gap-4 rounded-lg border-border bg-card px-4 py-8"
            }
          >
            <Input
              className={"bg-white py-5"}
              type={"email"}
              placeholder={"email"}
            />
            <Input
              className={"bg-white py-5"}
              type={"text"}
              placeholder={"Nama"}
            />
            <Input
              className={"bg-white py-5"}
              type={"text"}
              placeholder={"Judul Website Undangan"}
            />
          </div>
        </div>
        <div>
          <div className="mb-3 flex items-center justify-between">
            <h2 className={"text-2xl font-semibold"}>Custom Domain</h2>
            <Switch />
          </div>
          <div
            className={
              "flex w-full flex-col gap-4 rounded-lg border-border bg-card px-4 py-8"
            }
          >
            <Input
              className={"bg-white py-5"}
              type={"text"}
              placeholder={"Domain"}
            />
          </div>
        </div>
        <div>
          <div className="mb-3 flex items-center justify-between">
            <h2 className={"text-2xl font-semibold"}>Undangan Fisik</h2>
            <Switch />
          </div>
          <div
            className={
              "flex w-full flex-col gap-4 rounded-lg border-border bg-card px-4 py-8"
            }
          >
            <div>
              <p>Jumlah</p>
              <Select>
                <SelectTrigger className="w-full bg-white">
                  <SelectValue placeholder="Jumlah undangan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="25">25</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                  <SelectItem value="100">100</SelectItem>
                  <SelectItem value="lainnya">Lainnya</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <p>Alamat Kirim</p>
              <Textarea
                placeholder={"Masukkan alamat kemana undangan dikirim"}
                className={"bg-white"}
              />
            </div>
          </div>
        </div>

        <div className={"flex flex-col gap-4"}>
          <h2 className={"mb-3 text-2xl font-semibold"}>Fitur Tambahan</h2>
          <div
            className={
              "box-shadow flex w-full flex-col gap-4 rounded-lg border-border bg-card px-4 py-8 shadow-primary"
            }
          >
            <div className={"flex gap-4"}>
              <p>RSVP</p>
              <Badge>Most Popular</Badge>
            </div>
            <div>
              <div className={"flex gap-4 rounded-lg bg-white px-3 py-4"}>
                <Check />
                Fitur agar dapat memperikarakan tamu undangan yang hadir ketika
                acara
              </div>
            </div>
            <div className={"flex items-center justify-between"}>
              <span>10 K</span>
              <Button>
                <Plus /> Tambahkan
              </Button>
            </div>
          </div>
          <div
            className={
              "flex w-full flex-col gap-4 rounded-lg border-border bg-card px-4 py-8"
            }
          >
            <p>Backsound</p>
            <div>
              <div className={"flex gap-4 rounded-lg bg-white px-3 py-4"}>
                <Check />
                Buat agar website undangan lebih syahdu
              </div>
            </div>
            <div className={"flex items-center justify-between"}>
              <span>5 K</span>
              <Button>
                <Plus /> Tambahkan
              </Button>
            </div>
          </div>
        </div>
        <div
          className={
            "flex w-full flex-col gap-4 rounded-lg border-border bg-card px-4 py-8"
          }
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className={""}>
                <div
                  className={
                    "flex w-full justify-between text-2xl font-semibold"
                  }
                >
                  <span>Total</span>
                  <span>100.000</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className={"gap-4 px-3 py-4 text-xl"}>
                {/* TODO: Make this dynamic*/}
                <div className={"flex w-full justify-between"}>
                  <span>Template</span>
                  <span>100.000</span>
                </div>
                <div className={"flex w-full justify-between"}>
                  <span>Ppn</span>
                  <span>0</span>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Button className={"w-full"}>Lanjut Bayar</Button>
        </div>
      </MaxwidthWrapper>
    </div>
  );
};
export default Page;
