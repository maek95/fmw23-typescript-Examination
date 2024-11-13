"use client";
import { CartContext } from "@/context/cartContext";
import { ReactNode, useContext } from "react";
import CartListItem from "./CartListItem";

export default function CartList() {
  const { cartItems } = useContext(CartContext);

  return (
    <section className="w-full box-border flex flex-col px-2">
      {cartItems.map((item, index) => (
        <CartListItem key={index} cartItem={item} />
      ))}
    </section>
  );
}
