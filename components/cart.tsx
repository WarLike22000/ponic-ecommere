"use client";

import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Image from "next/image";

const Cart = () => {

    const itemCount = 0;
    
    return ( 
        <Sheet>
            <SheetTrigger className="group -m-2 flex items-center p-2">
                <ShoppingCart aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"/>

                <span className="mr-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                    0
                </span>
            </SheetTrigger>

            <SheetContent side="left" className="flex w-full flex-col pl-0 sm:max-w-lg">
                <SheetHeader className="space-y-2.5 pl-6 float-start">
                    <SheetTitle>
                        خرید (0)
                    </SheetTitle>
                </SheetHeader>

                {
                    itemCount > 0 ? (
                        <>
                            <div className="flex w-full flex-col pl-6">
                                cart Items
                            </div>
                            <div className="space-y-4 pl-6">
                                <Separator />
                                <div className="space-y-2 text-sm">


                                    <div className="flex">
                                        <span className="flex-1">هزینه ارسال</span>
                                        <span>رایگان</span>
                                    </div>
                                    <div className="flex">
                                        <span className="flex-1">تراکنش</span>
                                        <span>1</span>
                                    </div>
                                    <div className="flex">
                                        <span className="flex-1">مجموع</span>
                                        <span>1</span>
                                    </div>
                                </div>

                                <SheetFooter>
                                    <SheetTrigger asChild>
                                        <Link href="/cart" className={buttonVariants({
                                            className: "w-full"
                                        })}>
                                            ادامه خرید   
                                        </Link>
                                    </SheetTrigger>
                                </SheetFooter>
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-col items-center h-full justify-center space-y-1">
                            <div className="relative mb-4 h-60 w-60 text-muted-foreground">
                                <Image
                                    src="/basket.jpg"
                                    alt="empty shopping cart ponic"
                                    fill
                                />
                            </div>
                            <div className="text-xl font-semibold">
                                سبد خرید خالی است
                            </div>
                            <SheetTrigger asChild>
                                <Link 
                                    href="/products"
                                    className={buttonVariants({
                                        variant: "link",
                                        size: "sm",
                                        className: "text-muted-foreground text-sm"
                                    })}
                                >
                                    افزودن محصول به سبد
                                </Link>
                            </SheetTrigger>
                        </div>
                    )
                }
            </SheetContent>
        </Sheet>
     );
}
 
export default Cart;