import Link from "next/link";
import MaxWidthWrapper from "./max-width-wrapper";
import Image from "next/image";
import NavItems from "./nav-items";
import { buttonVariants } from "./ui/button";
import Cart from "./cart";

const Navbar = () => {

    const user = null;
    
    return ( 
        <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
            <header className="relative bg-white">
                <MaxWidthWrapper>
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                            <div className="mr-4 flex lg:mr-0">
                                <Link href="/">
                                    <Image
                                        alt="LOGO"
                                        src="/logo.svg"
                                        width={40}
                                        height={40}
                                    />
                                </Link>
                            </div>

                            <div className="hidden z-50 lg:mr-80 lg:block lg:self-stretch">
                                <NavItems />
                            </div>

                            <div className="mr-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-x-6">
                                    {user ? null : (
                                        <Link href="/sign-in" className={buttonVariants({ variant: "ghost" })}>
                                            ورود
                                        </Link>
                                    )}

                                    {user ? null : (
                                        <span
                                            className="h-6 w-px bg-gray-200"
                                            aria-hidden="true"
                                        />
                                    )}

                                    {user ? null : (
                                        <Link href="/sign-up" className={buttonVariants({ variant: "ghost" })}>
                                            حساب جدید
                                        </Link>
                                    )}

                                    {user ? (
                                        <span
                                            className="h-6 w-px bg-gray-200"
                                            aria-hidden="true"
                                        />
                                    ) : null}

                                    {user ? null : (
                                        <span
                                            className="h-6 w-px bg-gray-200"
                                            aria-hidden="true"
                                        />
                                    )}

                                    <div className="flow-root">
                                        <Cart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
     );
}
 
export default Navbar;