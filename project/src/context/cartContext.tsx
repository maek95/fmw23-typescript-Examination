"use client";
import { CartItem, Dip, Drink, Wonton } from "@/types/types";
import { createContext, ReactNode, use, useEffect, useState } from "react";

type CartContextType = {
  cartItems: CartItem[];
  cartItemIds: number[];
  cartTotalPrice: number;
  addToCart: (item: Wonton | Drink | Dip) => void;
  deleteFromCart: (item: Wonton | Drink | Dip) => void;
};

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  cartItemIds: [],
  cartTotalPrice: 0,
  addToCart: () => {},
  deleteFromCart: () => {},
});

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartItemIds, setCartItemIds] = useState<number[]>([]);
  const [cartTotalPrice, setCartTotalPrice] = useState<number>(0); // undefined rather or?

  useEffect(() => {
    setCartItemIds(createCartItemIdArray()); // create it all the time cartItems get updated, so we can just extract cartItemIds when we want...

    setCartTotalPrice(calculateTotalPrice());
  }, [cartItems]);

  useEffect(() => {
    console.log("cartItemIds:", cartItemIds);
  }, [cartItemIds]);

  function createCartItemIdArray() {
    //const idsArr = cartItems.map((cartItem) => cartItem.item.id);

    // When calling the postOrder endpoint we need an array of ids of the items the user want to order.
    // e.g. [1, 1, 1, 1, 3, 4, 8, 2, 4]
    const idsArr = [];

    for (let i = 0; i < cartItems.length; i++) {
      for (let j = 0; j < cartItems[i].amount; j++) {
        idsArr.push(cartItems[i].item.id);
      }
    }

    return idsArr;
  }

  function calculateTotalPrice() {
    const totalPrice = cartItems.reduce(
      (acc, cartItem) => acc + cartItem.item.price * cartItem.amount,
      0
    ); // 0 is initial value of 'acc'
    // 9 SEK * 5 Karlstad + 19 SEK * 3 Sprite + 9 SEK * 1 Paris
    return totalPrice;
  }

  function addToCart(newItem: Wonton | Drink | Dip) {
    // check first if newItem is the same as an item that already exists in cart...
    const itemExists = cartItems.some(
      (cartItem) => cartItem.item.id === newItem.id
    );

    let updatedCartItems;

    if (itemExists) {
      // If item exists, update its amount
      updatedCartItems = cartItems.map((cartItem) =>
        cartItem.item.id === newItem.id
          ? { ...cartItem, amount: cartItem.amount + 1 }
          : cartItem
      );
    } else {
      // If item does not exist, add it with an amount of 1
      updatedCartItems = [...cartItems, { item: newItem, amount: 1 }];
    }

    setCartItems(updatedCartItems);
  }

  function deleteFromCart(item: Wonton | Drink | Dip) {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.item.id === item.id) {
        return { ...cartItem, amount: cartItem.amount - 1 };
      } else {
        return cartItem;
      }
    });

    setCartItems(updatedCartItems);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartItemIds,
        cartTotalPrice,
        addToCart,
        deleteFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
