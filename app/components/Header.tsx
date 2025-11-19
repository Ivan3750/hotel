import Image from "next/image";
import Link from "next/link"
import { FiSearch } from "react-icons/fi";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";

import Logo from "@/public/logo.svg"



const Header = () => {
    return (
        <div>
            <div className="flex gap-2 bg-[#F9F6F3] py-[10px] px-[50px] justify-between items-center">
                <div className="flex gap-[120px]">
                <div className="flex gap-[10px]">
                    <CiPhone className="text-[#ECB27B]" fontSize={23} />

<Link href={"tel:+4540506070"}>

                    <p>+45 40 50 60 70</p>
</Link>
                </div>
                <div className="flex gap-[10px]">
                    <HiOutlineMail className="text-[#ECB27B]" fontSize={23} />
<Link href={"mailto:help@mellow.dk"}>
                    <p>help@mellow.dk</p>
</Link>
                </div>
                </div>
                <div className="flex text-[#ECB27B] gap-[40px] text-[18px]" >
                    <Link href={"/"}>
                        <FaFacebook />
                    </Link>
                    <Link href={"/"}>
                        <FaInstagram />
                    </Link>
                    <Link href={"/"}>
                        <FaTwitter />
                    </Link>
                    <Link href={"/"}>
                        <FaLinkedin />
                    </Link>
                    <Link href={"/"}>
                        <FaYoutube />
                    </Link>
                </div>
            </div>

            <div className="flex p-[50px] justify-between">

                <Image src={Logo} alt="Mellow"></Image>
                <nav className="flex gap-[54px] items-center">
                    <Link href="/">
                        Forside
                    </Link>
                    <Link href="/">
                        Om os
                    </Link>
                    <Link href="/">
                        Rummer
                    </Link>
                    <Link href="/">
                        Services
                    </Link>
                    <Link href="/">
                        Nyhed
                    </Link>
                    <Link href="/">
                        Kontakt
                    </Link>
                </nav>
                <div className="flex px-[18px] py-[8px] border border-[#E9E9E9] rounded-[120px] gap-[20px] items-center">
                    <input type="text" placeholder="Søg her..." className="bg-[#F9F6F3] bg-[transparent]" />
                    <FiSearch fontSize={24} />
                </div>
            </div>
        </div>
    )
}

export default Header