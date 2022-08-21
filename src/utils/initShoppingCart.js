import ShoppingCart from "../models/shopping/shoppingCart";
export let shoppingCart;

const initShoppingCart = () => {
  shoppingCart = new ShoppingCart();
  shoppingCart.setDeliveryCost(4.95);
  return shoppingCart;
};

export default initShoppingCart;
