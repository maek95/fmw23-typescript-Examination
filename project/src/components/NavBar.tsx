"use client";
import { CartContext } from "@/context/cartContext";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

export default function NavBar() {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const { cartItemIds } = useContext(CartContext);
  const cartAmount = cartItemIds.length;

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
        <div className="relative">
          <Image
            src={"/cartbtn.svg"}
            alt="cartbtn"
            height={100}
            width={100}
            className="bg-[#F4F3F1F0] rounded-xl"
          />
          {cartAmount > 0 && (
            <div className="absolute h-10 w-10 rounded-full bg-red-500 -top-3 -right-3 text-white flex items-center justify-center">
              {cartAmount}
            </div>
          )}
        </div>
      </Link>
    </nav>
  );
}
