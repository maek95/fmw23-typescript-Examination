"use client";
import { CartContext } from "@/context/cartContext";
import { CartItem, Dip, Drink, Wonton } from "@/types/types";
import { useContext } from "react";

export default function CartListItem({
  cartItem,

  noBorderBottom = false,
}: {
  cartItem: CartItem;
  noBorderBottom?: boolean;
}) {
  // isSelected, change from bg-inherit to bg-[#353131]
  // border from Figma:
  /* border: 1px solid var(--shade-24-light, #F1F0EC3D) */

  const { addToCart, deleteFromCart } = useContext(CartContext);

  return (
    <div /* h-24 ?? */
      className={`w-full box-border flex flex-col justify-center gap-2 py-4 border-[#3531313D] text-[#353131] border-dotted  border-r-0 border-t-0 border-l-0 ${
        noBorderBottom ? "border-b-0" : ""
      }`}
    >
      <div className="flex justify-between w-full">
        <h2 className="text-[#353131] font-bold">{cartItem.item.name}</h2>
        <span className="flex-grow mx-2  border-dotted border-t-0 border-l-0 border-r-0 border-b-[1px] border-[#353131] box-border"></span>
        <h2 className="text-[#353131] font-bold">{cartItem.item.price} SEK</h2>
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => addToCart(cartItem.item)}
          className="w-6 h-6 rounded-full bg-[#3531313D] border-none cursor-pointer"
        >
          <span className="text-[#222222]">+</span>
        </button>
        <p className="text-[#353131]">{cartItem.amount} stycken</p>
        <button
          onClick={() => deleteFromCart(cartItem.item)}
          className="w-6 h-6 rounded-full bg-[#3531313D] border-none box-border cursor-pointer"
        >
          <span className="text-[#222222]">-</span>
        </button>
      </div>
    </div>
  );
}
