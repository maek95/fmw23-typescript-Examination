"use client";
import { CartContext } from "@/context/cartContext";
import { Dip, Drink } from "@/types/types";
import { useContext, useEffect, useState } from "react";

export default function ButtonIngredient({
  title,
  dipOrDrinkObj,
}: {
  title: string;
  dipOrDrinkObj: Dip | Drink;
}) {
  const { addToCart, cartItems } = useContext(CartContext);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    checkIfInCart();
  }, [cartItems]);

  function checkIfInCart() {
    const isInCart = cartItems.some(
      (cartItem) => dipOrDrinkObj.id === cartItem.item.id
    );
    if (isInCart) {
      setAddedToCart(true);
    }
  }

  return (
    <button
      onClick={() => addToCart(dipOrDrinkObj)}
      className={`cursor-pointer border-none p-2 rounded-md ${
        addedToCart ? "bg-[#353131]" : "bg-[#F1F0EC3D]"
      }`}
    >
      {" "}
      {/* selected button color: #353131 */}
      <p>{title}</p>
    </button>
  );
}
