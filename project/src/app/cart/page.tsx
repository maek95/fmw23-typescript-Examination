import CartList from "@/components/cart/CartList";

export default function CartPage() {
  //const { cartItems } = useContext(CartContext);

  return (
    <div className="w-full">
      <main className="flex flex-col w-full px-4 pb-6 box-border">
        <CartList />
      </main>
    </div>
  );
}
