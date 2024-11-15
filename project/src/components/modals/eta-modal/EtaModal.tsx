"use client";
import ButtonDarkLarge from "@/components/buttons/ButtonDarkLarge";
import ButtonInheritLarge from "@/components/buttons/ButtonInheritLarge";
import { Order } from "@/types/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReceiptModal from "../receipt-modal/ReceiptModal";
import { useRouter } from "next/navigation";

export default function EtaModal({
  orderConfirmation,
  setOpenEtaModal,
  setOpenReceiptModal,
}: {
  orderConfirmation: Order;
  setOpenEtaModal: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenReceiptModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [etaMinutes, setEtaMinutes] = useState<number>();
  const router = useRouter();

  useEffect(() => {
    setEtaMinutes(calculateEtaMinutes);
  }, []);

  function calculateEtaMinutes(): number {
    const eta = new Date(orderConfirmation.eta); // convert date from ISO date string to milliseconds
    const timestamp = new Date(orderConfirmation.timestamp); // date in milliseconds
    const differenceInMs = eta.getTime() - timestamp.getTime();

    const etaMinutes = Math.floor(differenceInMs / 1000 / 60); //  / 1000 converts to seconds / converts to minutes

    return etaMinutes;
  }

  return (
    // pt-97px taken from Figma
    <div className="absolute top-0 pt-[97px] min-h-dvh w-full bg-[#605858] flex flex-col items-center box-border justify-between px-4 pb-4 ">
      {/* {openReceiptModal && <ReceiptModal orderId={orderConfirmation.id} />} */}
      <Image src={"/boxtop.png"} height={362} width={390} alt="boxtop" />
      <div className="w-4/6 text-center flex flex-col gap-6 box-border pb-12">
        {" "}
        {/* pb-12 even though we have justify-between because the boxtop.png is bigger than it looks and takes up more space  */}
        <h1 className="">DINA WONTONS TILLAGAS!</h1> {/*  */}
        <h2>ETA {etaMinutes} MIN</h2>
        <p>#{orderConfirmation.id.toLocaleUpperCase()}</p>
      </div>

      <div className="flex flex-col gap-4 w-full box-border">
        <ButtonInheritLarge
          title="SE KVITTO"
          onClick={() => {
            setOpenEtaModal(false);
            setOpenReceiptModal(true);
          }}
        />
        <ButtonDarkLarge
          title="GÖR EN NY BESTÄLLNING"
          onClick={() => router.push("/")}
        />
      </div>
    </div>
  );
}
