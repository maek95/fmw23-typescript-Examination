"use client";
import { CartContext } from "@/context/cartContext";
import { ReactNode, useContext } from "react";
import ReceiptListItem from "./ReceiptListItem";
import { Receipt } from "@/types/types";

export default function ReceiptList({ receiptData }: { receiptData: Receipt }) {
  return (
    <section className="w-full box-border flex flex-col px-2 pb-4">
      {receiptData.items.map((receiptItem, index) => (
        <ReceiptListItem key={index} receiptItem={receiptItem} />
      ))}
      <div className="w-full bg-[#3531313D] h-20 flex justify-between items-center px-4 box-border">
        <div className="flex flex-col">
          <h4 className="text-[#353131]">TOTALT</h4>
          <p className="text-[#353131]">inkl 20% moms</p>
        </div>
        <h1 className="text-[#353131]">{receiptData.orderValue} SEK</h1>
      </div>
    </section>
  );
}
