"use client";
import { CartContext } from "@/context/cartContext";
import {
  CartItem,
  Dip,
  Drink,
  Order,
  ReceiptItem,
  Wonton,
} from "@/types/types";
import { useContext } from "react";

export default function ReceiptListItem({
  receiptItem,

  noBorderBottom = false,
}: {
  receiptItem: ReceiptItem;
  noBorderBottom?: boolean;
}) {
  // isSelected, change from bg-inherit to bg-[#353131]
  // border from Figma:
  /* border: 1px solid var(--shade-24-light, #F1F0EC3D) */

  return (
    <div /* h-24 ?? */
      className={`w-full box-border flex flex-col justify-center gap-2 py-4 border-[#3531313D] text-[#353131] border-dotted  border-r-0 border-t-0 border-l-0 ${
        noBorderBottom ? "border-b-0" : ""
      }`}
    >
      <div className="flex justify-between w-full">
        <h2 className="text-[#353131]">{receiptItem.name}</h2>
        <span className="flex-grow mx-2  border-dotted border-t-0 border-l-0 border-r-0 border-b-[1px] border-[#353131]"></span>
        <h2 className="text-[#353131]">{receiptItem.price} SEK</h2>
      </div>
      <div className="flex gap-4">
        <p className="text-[#353131]">{receiptItem.quantity} stycken</p>
      </div>
    </div>
  );
}
