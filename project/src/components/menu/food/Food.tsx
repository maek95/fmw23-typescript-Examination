import { Wonton } from "@/types/types";
import MenuContainer from "../MenuContainer";

import FoodMenuItem from "./FoodItem";

export default function Food({ foodData }: { foodData: Wonton[] }) {
  return (
    <MenuContainer>
      {foodData.map((foodObj, index) => {
        const isLastItem = index === foodData.length - 1;
        return (
          <FoodMenuItem
            noBorderBottom={isLastItem}
            key={index}
            foodObj={foodObj}
          />
        );
      })}
    </MenuContainer>
  );
}
