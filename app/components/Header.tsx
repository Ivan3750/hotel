"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { CiPhone } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";

import Logo from "@/public/logo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative">
      <div className="bg-[#F9F6F3] px-4 py-2 md:px-[50px] flex flex-col md:flex-row gap-3 md:justify-between md:items-center">
        <div className="flex  flex-row gap-3 md:gap-[120px] text-sm">
          <div className="flex gap-2 items-center">
            <CiPhone className="text-[#ECB27B]" size={20} />
            <Link href="tel:+4540506070">+45 40 50 60 70</Link>
          </div>

          <div className="flex gap-2 items-center">
            <HiOutlineMail className="text-[#ECB27B]" size={20} />
            <Link href="mailto:help@mellow.dk">help@mellow.dk</Link>
          </div>
        </div>

        <div className="hidden md:flex gap-6 text-[#ECB27B] text-lg">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin />
          <FaYoutube />
        </div>
      </div>

      <div className="px-4 py-4 md:px-[50px] flex items-center justify-between">
        <Image src={Logo} alt="Mellow" className="w-[130px]" />

        <nav className="hidden md:flex gap-8 items-center">
          <Link href="/">Forside</Link>
          <Link href="/">Om os</Link>
          <Link href="/">Rummer</Link>
          <Link href="/">Services</Link>
          <Link href="/">Nyhed</Link>
          <Link href="/">Kontakt</Link>
        </nav>

        <div className="hidden lg:flex px-4 py-2 border border-[#E9E9E9] rounded-full gap-3 items-center">
          <input
            type="text"
            placeholder="Søg her..."
            className="outline-none bg-transparent"
          />
          <FiSearch size={20} />
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(true)}
        >
          <FiMenu />
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/40">
          <div className="absolute right-0 top-0 h-full w-[80%] bg-white p-6 flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <Image src={Logo} alt="Mellow" className="w-[120px]" />
              <button
                className="text-2xl"
                onClick={() => setMenuOpen(false)}
              >
                <FiX />
              </button>
            </div>

            <nav className="flex flex-col gap-4 text-lg">
              <Link href="/" onClick={() => setMenuOpen(false)}>Forside</Link>
              <Link href="/" onClick={() => setMenuOpen(false)}>Om os</Link>
              <Link href="/" onClick={() => setMenuOpen(false)}>Rummer</Link>
              <Link href="/" onClick={() => setMenuOpen(false)}>Services</Link>
              <Link href="/" onClick={() => setMenuOpen(false)}>Nyhed</Link>
              <Link href="/" onClick={() => setMenuOpen(false)}>Kontakt</Link>
            </nav>

            <div className="mt-auto flex gap-5 text-[#ECB27B] text-xl">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedin />
              <FaYoutube />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
