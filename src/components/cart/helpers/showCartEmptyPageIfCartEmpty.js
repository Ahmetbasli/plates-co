import { shoppingCart } from "../../../utils/initShoppingCart";

const showCartEmptyPageIfCartEmpty = () => {
  if (shoppingCart.items.length === 0) {
    document.querySelector(".cart").style.display = "none";
    document.querySelector(".cartEmptyPage").style.display = "block";
    return;
  }
  document.querySelector(".cartEmptyPage").style.display = "none";
};
export default showCartEmptyPageIfCartEmpty;
