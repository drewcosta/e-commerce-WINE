import { Product } from "@/types/Product.interfaces";

export const addToCart = (product: Product) => {
  let cartItems = localStorage.getItem('cart-items');
  if (cartItems) {
    let cartItemsArray = JSON.parse(cartItems);

    let existingProductIndex = cartItemsArray.findIndex((item: { id: string; }) => item.id === product.id);

    if (existingProductIndex != -1) {
      cartItemsArray[existingProductIndex].quantity += 1;
    } else {
      cartItemsArray.push({ ...product, quantity: 1, id: product.id })
    }

    localStorage.setItem('cart-items', JSON.stringify(cartItemsArray));
  } else {
    const newCart = [{ ...product, quantity: 1, id: product.id }]
    localStorage.setItem('cart-items', JSON.stringify(newCart));
  }
}
