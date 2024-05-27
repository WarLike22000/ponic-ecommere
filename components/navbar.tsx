import Link from "next/link";
import MaxWidthWrapper from "./max-width-wrapper";
import Image from "next/image";
import NavItems from "./nav-items";

const Navbar = () => {
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
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
     );
}
 
export default Navbar;