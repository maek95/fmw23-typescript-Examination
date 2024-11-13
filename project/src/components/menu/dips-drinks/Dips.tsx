import { Dip } from "@/types/types";
import MenuContainer from "../MenuContainer";
import DipsOrDrinksMenuItem from "./DipsOrDrinksMenuItem";

export default function Dips({ dipsData }: { dipsData: Dip[] }) {
  return (
    <MenuContainer>
      {/* map through dips menu items and create a <DipsOrDrinksMenuItem /> for each item  */}
      <DipsOrDrinksMenuItem data={dipsData} />
    </MenuContainer>
  );
}
