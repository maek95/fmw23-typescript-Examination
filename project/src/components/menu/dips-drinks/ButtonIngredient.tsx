import { CartContext } from "@/context/cartContext";
import { Dip, Drink } from "@/types/types";
import { useContext } from "react";

export default function ButtonIngredient({
  title,
  dipOrDrinkObj,
}: {
  title: string;
  dipOrDrinkObj: Dip | Drink;
}) {
  const { addToCart } = useContext(CartContext);

  return (
    <button
      onClick={() => addToCart(dipOrDrinkObj)}
      className="bg-[#F1F0EC3D] border-none p-2 rounded-md"
    >
      {" "}
      {/* selected button color: #353131 */}
      <p>{title}</p>
    </button>
  );
}
