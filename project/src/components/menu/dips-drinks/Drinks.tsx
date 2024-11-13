import { Drink } from "@/types/types";
import MenuContainer from "../MenuContainer";
import DipsOrDrinksMenuItem from "./DipsOrDrinksMenuItem";

export default function Drinks({ drinksData }: { drinksData: Drink[] }) {
  return (
    <MenuContainer>
      {/* map through drinks menu items and create a <DipsOrDrinksMenuItem /> for each item  */}
      <DipsOrDrinksMenuItem data={drinksData} />
    </MenuContainer>
  );
}
