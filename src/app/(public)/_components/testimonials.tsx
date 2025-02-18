import React from "react";
import Image from "next/image";
import MaxwidthWrapper from "@/components/global/maxwidth-wrapper";
import { Quote, Star } from "lucide-react";
import Rating from "@/components/global/rating";

interface Testimoni {
  id: string;
  name: string;
  message: string;
  rating: number;
  image: string;
}

const testimonials: Testimoni[] = [
  {
    id: "1",
    name: "SINTA & GEORGE",
    message:
      "Saya sangat senang menggunakan website undangan pernikahan ini! Banyak pilihan templates yang tersedia, dan saya bisa menggabungkan berbagai elemen sesuai keinginan. Prosesnya sangat mudah dan hasilnya pun memuaskan!",
    rating: 5,
    image: "/images/testimonials1.png",
  },
  {
    id: "2",
    name: "ADAM & HAWA",
    message:
      "Website undangan pernikahan ini sangat mudah digunakan! Kami dapat membuat undangan cantik dengan cepat.",
    rating: 5,
    image: "/images/testimonials2.png",
  },
  {
    id: "3",
    name: "YUSUF & ANGELINE",
    message:
      "Luar biasa! Membuat undangan pernikahan jadi mudah dan terjangkau. Sangat direkomendasikan untuk yang ingin undangan indah tanpa repot!",
    rating: 5,
    image: "/images/testimonials3.png",
  },
  {
    id: "4",
    name: "AHMAD & AISYAH",
    message:
      "Banyak templates menarik dan prosesnya mudah. Teman-teman saya terkesan dengan undangan yang saya pilih!",
    rating: 5,
    image: "/images/testimonials4.png",
  },
  {
    id: "5",
    name: "NOVI & INDRA",
    message:
      "Saya membuat situs undangan pernikahan saya hanya dalam satu hari, dan itu sempurna sejak awal. ",
    rating: 5,
    image: "/images/testimonials5.png",
  },
];

const Testimonials = () => {
  return (
    <section className={"w-full"}>
      <MaxwidthWrapper className={"grid grid-cols-2 gap-2"}>
        <div className={"col-span-2 mb-4 flex items-center bg-card p-6"}>
          <div className={"mx-auto flex flex-col items-center gap-6"}>
            <h2 className={"text-center text-3xl font-semibold text-accent"}>
              Testimoni
            </h2>
            <Quote className={"size-8 fill-primary text-transparent"}></Quote>
            <Rating score={testimonials[0].rating}></Rating>
            <p className={"text-center text-[22px] font-medium"}>
              {testimonials[0].message}
            </p>
            <Image
              src={testimonials[0].image}
              alt={testimonials[0].name}
              width={120}
              height={120}
            ></Image>
            <p className={"text-[18px] font-medium text-secondary"}>
              {testimonials[0].name}
            </p>
          </div>
        </div>
        {testimonials
          .slice(1, testimonials.length + 1)
          .map(({ id, name, message, image, rating }) => (
            <div
              key={id}
              className={
                "col-span-2 flex w-full items-center justify-center gap-6 border border-border p-4 py-6 tablet:col-span-1"
              }
            >
              <Image
                src={image}
                alt={name}
                width={70}
                height={70}
                className={"size-[70px]"}
              />
              <div className={"flex flex-col gap-3"}>
                <Rating score={rating}></Rating>
                <p className={"text-[18px] text-text"}>{message}</p>
                <p className={"font-bold text-secondary"}>{name}</p>
              </div>
            </div>
          ))}
      </MaxwidthWrapper>
    </section>
  );
};
export default Testimonials;
