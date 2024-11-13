import { Dip, Drink, Wonton } from "@/types/types";
import Dips from "./dips-drinks/Dips";
import Drinks from "./dips-drinks/Drinks";
import Food from "./food/Food";
import MenuContainer from "./MenuContainer";

export default function Menu({
  foodData,
  drinksData,
  dipsData,
}: {
  foodData: Wonton[];
  drinksData: Drink[];
  dipsData: Dip[];
}) {
  return (
    <section className="flex flex-col gap-4 w-full">
      <MenuContainer>
        <Food foodData={foodData} />
      </MenuContainer>
      <MenuContainer>
        <Drinks drinksData={drinksData} />
      </MenuContainer>
      <MenuContainer>
        <Dips dipsData={dipsData} />
      </MenuContainer>
    </section>
  );
}
