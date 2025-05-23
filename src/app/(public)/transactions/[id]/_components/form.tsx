"use client";
import React, { useTransition } from "react";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Check, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { Template, User } from "@prisma/client";
import { createTransaction } from "@/actions/transaction";
import { v4 as uuidv4 } from "uuid";
import { getTemplateCategoryTitle } from "@/actions/template-category";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

const formSchema = z.object({});

interface TransactionFormProps {
  user?: User;
  template: Template;
}

const TransactionForm = ({ user, template }: TransactionFormProps) => {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit() {
    console.log("Submitting forms");
    if (!user) {
      //  show modal asking for authentication
      // TEMP:
      // router.push("/login");
    }

    startTransition(async () => {
      // TEMP
      if (!user) return;

      // buat transaction di midtrans
      const order_id = `${uuidv4()}`;

      const templateCategory: string =
        (await getTemplateCategoryTitle(template.id))?.data?.title || "unknown";

      const transactionResponse = await createTransaction(
        {
          userId: user.id,
          templateId: template.id,
        },
        {
          transaction_details: {
            gross_amount: template.price, // TODO: Fix this
            order_id: order_id,
          },
          item_details: [
            {
              id: template.id,
              category: templateCategory,
              name: template.title,
              price: template.price,
              quantity: 1,
              // url: `${process.env.NEXT_PUBLIC_DOMAIN}/templates/${template.id}`,
            },
          ],
          customer_details: {
            first_name: user.username as string, // TODO: Remove 'as string'
            email: user.email,
            // phone: just from form
          },
        },
      );

      console.log(transactionResponse);

      // TODO: It'll better if we add some loading animation to
      // indicate feedback to user,

      console.log(
        `transactionResponse.data?.redirect_url = ${transactionResponse.data?.redirect_url}`,
      );

      return router.push(transactionResponse.data?.redirect_url as string);
      // buat website baru di table website dengan template id, user id
      // tapi ini keknya nanti aja deh, pas pembayarannya sudah selesai
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
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
            "mt-8 flex w-full flex-col gap-4 rounded-lg border-border bg-card px-4 py-8"
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
                  <span>{template.price}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className={"gap-4 px-3 py-4 text-xl"}>
                {/* TODO: Make this dynamic*/}
                <div className={"flex w-full justify-between"}>
                  <span>Template</span>
                  <span>{template.price}</span>
                </div>
                <div className={"flex w-full justify-between"}>
                  <span>Ppn</span>
                  <span>0</span>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className={"flex items-center"}>
            <Checkbox className={"me-4"} />
            dengan melakukan pembelian, anda setuju terhadap
            <Link href={"/tnc"} className={"px-1 font-medium"}>
              {" "}
              Terms and Conditions
            </Link>
          </div>
          <Button type={"submit"} className={"w-full"}>
            Lanjut Bayar
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default TransactionForm;
