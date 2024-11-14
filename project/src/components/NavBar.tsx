"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 30) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full transition-all duration-500 box-border flex justify-between sticky top-0 mb-6 px-4 pt-4 pb-4 z-40 ${
        isScrolledDown ? "bg-[#EEEEEE]  bg-opacity-90" : "bg-inherit"
      } `}
    >
      <Link href={"/"}>
        <Image
          src={"/logo.png"}
          alt="cartbtn"
          height={100}
          width={100}
          className="rounded-xl"
        />
      </Link>
      <Link href={"/cart"}>
        <Image
          src={"/cartbtn.svg"}
          alt="cartbtn"
          height={100}
          width={100}
          className="bg-[#F4F3F1F0] rounded-xl"
        />
      </Link>
    </nav>
  );
}
