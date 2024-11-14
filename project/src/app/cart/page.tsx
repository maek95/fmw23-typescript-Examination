"use client";
import ButtonDarkLarge from "@/components/buttons/ButtonDarkLarge";
import CartList from "@/components/cart/CartList";
import EtaModal from "@/components/modals/eta-modal/EtaModal";
import ReceiptModal from "@/components/modals/receipt-modal/ReceiptModal";
import NavBar from "@/components/NavBar";
import { CartContext } from "@/context/cartContext";
import { Order } from "@/types/types";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function CartPage() {
  const { cartItems, cartItemIds, cartTotalPrice } = useContext(CartContext);
  const [orderConfirmation, setOrderConfirmation] = useState<Order>();
  const [openEtaModal, setOpenEtaModal] = useState(false);
  const [openReceiptModal, setOpenReceiptModal] = useState(false);

  // const router = useRouter();

  /* async function handlePostOrder() {
    await postOrder(cartItemIds);
  }
 */

  useEffect(() => {
    if (orderConfirmation) {
      setOpenEtaModal(true);
    }
  }, [orderConfirmation]);

  async function postOrder(itemIds: number[]) {
    try {
      const response = await fetch("/api/postOrder", {
        method: "POST",
        body: JSON.stringify({ itemIds }),
      });

      const data = (await response.json()) as Order; // order confirmation
      setOrderConfirmation(data);
      console.log(data);
      /*  if (data) {
        router.push("/eta");
      } else {
        console.log(
          "Failed receiving order confirmation, staying on cart page"
        );
      } */
    } catch (error) {
      console.error("Failed using /api/postOrder");
    }
  }

  return (
    <div className="w-full min-h-full relative">
      {openEtaModal && orderConfirmation && (
        <EtaModal
          setOpenEtaModal={setOpenEtaModal}
          setOpenReceiptModal={setOpenReceiptModal}
          orderConfirmation={orderConfirmation}
        />
      )}
      {openReceiptModal && orderConfirmation && (
        <ReceiptModal orderId={orderConfirmation.id} />
      )}
      {!openEtaModal && !openReceiptModal && <NavBar />}
      <main className="flex flex-col w-full px-4 pb-6 box-border">
        <CartList />

        {cartItems.length === 0 ? (
          <h1 className="text-[#353131]">No items in cart yet!</h1>
        ) : (
          <div className="flex flex-col gap-4 box-border">
            <div className="w-full bg-[#3531313D] h-20 flex justify-between items-center px-4 box-border">
              <div className="flex flex-col">
                <h4 className="text-[#353131]">TOTALT</h4>
                <p className="text-[#353131]">inkl 20% moms</p>
              </div>
              <h1 className="text-[#353131]">{cartTotalPrice} SEK</h1>
            </div>
            <ButtonDarkLarge
              disabled={cartItems.length === 0}
              onClick={() => postOrder(cartItemIds)}
              title="TAKE MY MONEY"
            />
            {/* <button
              onClick={() => postOrder(cartItemIds)}
              className={`w-full  h-20 `}
            >
              <h3 className="text-[#F4F3F1F0]">TAKE MY MONEY</h3>
            </button> */}
          </div>
        )}
      </main>
    </div>
  );
}
