import { shoppingCart } from "../../../utils/initShoppingCart";

const addDeliverCost = (price) => {
  if (price < 50) {
    shoppingCart.setDeliveryCost(4.95);
    return price + 4.95;
  } else if (price < 90) {
    shoppingCart.setDeliveryCost(2.95);
    return price + 2.95;
  }
  shoppingCart.setDeliveryCost(0);
  return price + 0;
};

export default addDeliverCost;
