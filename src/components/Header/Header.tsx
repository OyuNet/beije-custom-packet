"use client"
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import { useState } from "react";
import MenuMobile from "./MenuMobile";
import IconCart from "../Icons/Cart";
import IconUser from "../Icons/User";
import IconCross1 from "../Icons/Cross";
import IconHamburgerMenu from "../Icons/Hamburger";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <header className="fixed top-0 left-0 right-0 py-2 bg-[#f5f5f5] z-50">
                <div className="flex justify-between items-center py-4 px-4 md:px-8 lg:px-12 xl:px-44 2xl:px-40">
                    <Link href="/">
                        <Image
                            src="/beije-logo.png"
                            width={75}
                            height={50} 
                            alt="beije logo"
                            className="md:mr-12"
                        />
                    </Link>
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <div className="hidden md:flex">
                            <Navbar />
                        </div>
                        <button onClick={toggleMenu} className="md:hidden text-gray-700 focus:outline-none ml-auto">
                            {!isOpen ? <IconHamburgerMenu /> : <IconCross1 />}
                        </button>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/cart">
                            <IconCart />
                        </Link>
                        <Link href="/account">
                            <IconUser />
                        </Link>
                    </div>
                </div>
            </header>
            <MenuMobile isOpen={isOpen} />
        </div>
    );
}
