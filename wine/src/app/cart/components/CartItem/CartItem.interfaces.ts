import { ProductInCart } from "@/types/Product.interfaces"

export interface CartItemProps {
  product: ProductInCart;
  handleUpdateQuantity: (id: string, quantity: number) => void;
  handleDelete: (id: string) => void;
}
