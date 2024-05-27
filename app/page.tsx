import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "تحویل فوری",
    icon: ArrowDownToLine,
    description: "بعد از خرید هر محصول سریعا توسط تیم پونیک پیگیری میشود",
  },
  {
    name: "بالاترین کیفیت",
    icon: CheckCircle,
    description: "کیفیت تمام محصولات ما توسط استاندارد های ما بررسی شده. پس خیالت راحت",
  },
  {
    name: "برای سیاره",
    icon: Leaf,
    description: "محصولات ما تماما از الیاف طبیعی ساخته شده و قابل تجزیه در طبیعت میباشد",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">فروشگاه اینترنتی  {' '} <span className="text-blue-600">پونیک</span></h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            به پونیک خوش اومدید. تو اینجا هر چیزی که فکرش رو بکنی پیدا میشه. همه محصولات توسط تیم پونیک بررسی شده و طبق استاندارد ها دسته بندی شده
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href='/products' className={buttonVariants()}>
              جستجو میان پرطرفدارها
            </Link>
            <Button variant="ghost">
            بقیه محصولات &larr;
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-right lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.icon className="w-1/3 h-1/3" />}
                  </div>
                </div>

                <div className="mt-6 md:mr-4 md:mt-0 lg:mr-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
