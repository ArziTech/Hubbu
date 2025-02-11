import React from "react";
import Image from 'next/image'
import MaxwidthWrapper from "@/components/global/maxwidth-wrapper";
import { Quote, Star } from "lucide-react";

interface Testimoni {
  id:string;
  name: string;
  message: string;
  rating: number;
  image: string;
}

const testimonials: Testimoni[] = [
  {
    id:'1',
    name: "SINTA & GEORGE",
    message:
      "Saya sangat senang menggunakan website undangan pernikahan ini! Banyak pilihan template yang tersedia, dan saya bisa menggabungkan berbagai elemen sesuai keinginan. Prosesnya sangat mudah dan hasilnya pun memuaskan!",
    rating: 5,
    image: "/images/testimonials1.png"
  },
  {
    id:'2',
    name: "ADAM & HAWA",
    message:
      "Website undangan pernikahan ini sangat mudah digunakan! Kami dapat membuat undangan cantik dengan cepat.",
    rating: 5,
    image: "/images/testimonials2.png"
  },
  {
    id:'3',
    name: "YUSUF & ANGELINE",
    message:
      "Luar biasa! Membuat undangan pernikahan jadi mudah dan terjangkau. Sangat direkomendasikan untuk yang ingin undangan indah tanpa repot!",
    rating: 5,
    image: "/images/testimonials3.png"
  },
  {
    id:'4',
    name: "AHMAD & AISYAH",
    message:
      "Banyak template menarik dan prosesnya mudah. Teman-teman saya terkesan dengan undangan yang saya pilih!",
    rating: 5,
    image: "/images/testimonials4.png"
  },
  {
    id:'5',
    name: "NOVI & INDRA",
    message:
      "Saya membuat situs undangan pernikahan saya hanya dalam satu hari, dan itu sempurna sejak awal. ",
    rating: 5,
    image: "/images/testimonials5.png"
  }
];


const Testimonials = () => {
  return (
    <section className={"w-full"}>
      <MaxwidthWrapper className={"grid grid-cols-2 gap-2"}>
        <div className={"col-span-2 p-6 bg-card flex items-center mb-4"}>
          <div className={'flex flex-col gap-6 items-center   mx-auto'}>
            <h2 className={'text-center text-3xl text-accent font-semibold'}>Testimoni</h2>
            <Quote className={'fill-primary text-transparent size-8'}></Quote>
            <div className={"flex gap-2"}>
              {Array.from({ length: testimonials[0].rating }).map((_, idx) => (
                <Star
                  key={idx}
                  className={"border-none text-transparent fill-amber-200 size-6"}
                />
              ))}
            </div>
            <p className={'font-medium text-[22px] text-center'}>{testimonials[0].message}</p>
            <Image src={testimonials[0].image} alt={testimonials[0].name} width={120} height={120}></Image>
            <p className={'text-[18px] text-secondary font-medium'}>{testimonials[0].name}</p>
          </div>
        </div>
        {testimonials.slice(1, testimonials.length+1).map(({id, name,message, image,rating})=>(
          <div key={id} className={"col-span-2 tablet:col-span-1 flex items-center justify-center gap-6 p-4 border border-border w-full py-6"}>
            <Image src={image} alt={name} width={70} height={70} className={'size-[70px]'}/>
            <div className={'flex flex-col gap-3'}>
              <div className={"flex gap-2"}>
                {Array.from({ length: rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    className={"border-none text-transparent fill-amber-200 size-4"}
                  />
                ))}
              </div>
              <p className={'text-[18px] text-text '}>{message}</p>
              <p className={'font-bold text-secondary'}>{name}</p>
            </div>
          </div>
        ))}
      </MaxwidthWrapper>
    </section>
  );
};
export default Testimonials;
