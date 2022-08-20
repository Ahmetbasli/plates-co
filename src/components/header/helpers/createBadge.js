import { shoppingCart } from "../../../utils/initShoppingCart";

const createBadge = () => {
  const p = document.createElement("p");

  p.innerHTML = shoppingCart.getProductsAsMap().size;
  return p;
};

export default createBadge;
