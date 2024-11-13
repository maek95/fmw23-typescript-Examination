"use client";
import { CartItem, Dip, Drink, Wonton } from "@/types/types";
import { createContext, ReactNode, useState } from "react";

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: Wonton | Drink | Dip) => void;
  deleteFromCart: (item: Wonton | Drink | Dip) => void;
};

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  deleteFromCart: () => {},
});

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

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
    <CartContext.Provider value={{ cartItems, addToCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
