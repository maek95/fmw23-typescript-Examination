import { Dip, Drink, ProductType } from "@/types/types";
import ButtonIngredient from "./ButtonIngredient";

export default function DipsOrDrinksMenu({ data }: { data: Drink[] | Dip[] }) {
  // isSelected, change from bg-inherit to bg-[#353131]

  /* const isDrink = data[0]?.type === ProductType.drink;
  const header = isDrink ? "DRICKA" : "DIP"; */
  const dataType = data[0].type.toString();
  //const header =
  const isDrink = dataType === "drink";
  const header = isDrink ? "DRICKA" : "DIPSÅS";

  return (
    <div className="w-full flex flex-col  justify-center gap-4 p-4 box-border">
      <div className="flex justify-between w-full">
        <h2 className="custom-text-shadow">{header}</h2>
        <span className="flex-grow mx-2  border-dotted border-t-0 border-l-0 border-r-0 border-b-4 border-[#f4f3f1f0]"></span>
        <h2 className="custom-text-shadow">9 SEK</h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {data &&
          data.map((dipOrDrink) => (
            <ButtonIngredient
              dipOrDrinkObj={dipOrDrink}
              title={dipOrDrink.name}
            />
          ))}
      </div>
    </div>
  );
}
