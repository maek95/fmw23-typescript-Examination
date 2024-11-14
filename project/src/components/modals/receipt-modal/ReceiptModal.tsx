"use client";
import ButtonDarkLarge from "@/components/buttons/ButtonDarkLarge";
import ReceiptList from "@/components/modals/receipt-modal/ReceiptList";
import { Receipt } from "@/types/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ReceiptModal({ orderId }: { orderId: string }) {
  const router = useRouter();
  const [receiptData, setReceiptData] = useState<Receipt>();

  useEffect(() => {
    (async () => {
      await getReceipt();
    })();
  }, []);

  async function getReceipt() {
    try {
      const response = await fetch(`/api/getReceipt/${orderId}`);

      const data = await response.json();
      setReceiptData(data);

      console.log("receiptData:", data);
    } catch (error) {
      console.error("Error running getReceipt():", error);
    }
  }

  return (
    // pt-97px taken from Figma
    <div className="absolute top-0 left-0 bottom-0 pt-[165px] min-h-dvh overflow-y-auto w-full bg-[#605858] flex flex-col items-center box-border justify-between px-4 pb-4 ">
      <div className="flex  flex-col w-full box-border bg-white">
        <div className="w-full flex flex-col justify-center items-center">
          <Image src={"/logo.png"} height={100} width={100} alt="logo" />{" "}
          {/* pb-12 even though we have justify-between because the boxtop.png is bigger than it looks and takes up more space  */}
          <h3 className="text-[#605858]">KVITTO</h3> {/*  */}
          <p className="text-[#605858]">#{orderId}</p>
          {receiptData && <ReceiptList receiptData={receiptData} />}
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full box-border pt-4">
        <ButtonDarkLarge
          title="GÖR EN NY BESTÄLLNING"
          onClick={() => router.push("/")}
        />
      </div>
    </div>
  );
}
