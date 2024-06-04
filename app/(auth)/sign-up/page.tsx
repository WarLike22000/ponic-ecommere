"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthCredentialsValidator, TAuthCredentialsValidator } from "@/lib/validators/account-credentials-validator";

const SignUpPage = () => {
    
    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<TAuthCredentialsValidator>({
        resolver: zodResolver(AuthCredentialsValidator),
    });
    
    const onSubmit = ({ email, password }: TAuthCredentialsValidator) => {

    };
    
    return ( 
        <>
            <div className="container relative flex items-center pt-20 flex-col justify-center lg:px-0">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col items-center space-y-2 text-center">
                        <Image
                            src="/logo.svg"
                            width={100}
                            height={100}
                            alt="ponic"
                        />
                        <h1 className="text-2xl font-bold">
                            ساخت حساب کاربری
                        </h1>
                        <Link href="/sign-in" className={buttonVariants({ variant: "link", className: "gap-1.5" })}>
                            قبلا ثبت نام کرده اید؟ ورود
                            <ArrowLeft className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid gap-6">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid gap-2">
                                <div className="grid gap-2 py-2">
                                    <Label htmlFor="email">ایمیل</Label>
                                    <Input
                                        {...register('email')}
                                        id="email"
                                        className={cn("transition" ,{
                                            'focus-visible:ring-red-500': errors.email
                                        })}
                                        placeholder="alireza@example.com"
                                    />
                                </div>
                                <div className="grid gap-2 py-2">
                                    <Label htmlFor="password">رمز عبور</Label>
                                    <Input
                                        {...register('password')}
                                        id="password"
                                        className={cn("transition" ,{
                                            'focus-visible:ring-red-500': errors.password
                                        })}
                                        placeholder="رمز عبور"
                                    />
                                </div>

                                <Button>
                                    ثبت نام
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default SignUpPage;