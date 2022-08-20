import ShoppingCart from "../models/shopping/shoppingCart";
export let shoppingCart;
export let refreshShoppingCartInDom;
export let refreshCartBadge;
const initShoppingCart = () => {
  refreshShoppingCartInDom = new CustomEvent("refreshShoppingCartContent");
  refreshCartBadge = new CustomEvent("refreshCartBadge");
  shoppingCart = new ShoppingCart();
  shoppingCart.setDeliveryCost(4.95);
  return shoppingCart;
};

export default initShoppingCart;
