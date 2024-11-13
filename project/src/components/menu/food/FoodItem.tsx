"use client";
import { CartContext } from "@/context/cartContext";
import { Wonton } from "@/types/types";
import { useContext, useState } from "react";

export default function FoodMenuItem({
  foodObj,
  noBorderBottom = false,
}: {
  foodObj: Wonton;
  noBorderBottom?: boolean;
}) {
  // isSelected, change from bg-inherit to bg-[#353131]
  // border from Figma:
  /* border: 1px solid var(--shade-24-light, #F1F0EC3D) */
  const { addToCart } = useContext(CartContext);
  const [addedToCart, setAddedToCart] = useState(false);

  function handleAddToCart() {
    addToCart(foodObj);
    setAddedToCart(true);
  }
  return (
    <div /* h-24 ?? */
      onClick={() => handleAddToCart()}
      className={`w-full box-border rounded-xl flex flex-col justify-center gap-2 p-4 border-[#F1F0EC3D] bg-${
        addedToCart ? "[#353131]" : "[#605858]"
      } border-dotted border-r-0 border-t-0 border-l-0 ${
        noBorderBottom && "border-b-0"
      }`}
    >
      <div className="flex justify-between w-full">
        <h2 className="custom-text-shadow">{foodObj.name}</h2>
        <span className="flex-grow mx-2  border-dotted border-t-0 border-l-0 border-r-0 border-b-4 border-[#f4f3f1f0]"></span>
        <h2 className="custom-text-shadow">{foodObj.price} SEK</h2>
      </div>
      <div>
        <p className="custom-text-shadow">{foodObj.ingredients.join(", ")}</p>
      </div>
    </div>
  );
}