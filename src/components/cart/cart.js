import { shoppingCart } from "../../utils/initShoppingCart";
import "./cart.scss";
import createProductCard from "./helpers/createProductCard";
import createSideBarContent from "./helpers/createSidebarContet";
import showCartEmptyPageIfCartEmpty from "./helpers/showCartEmptyPageIfCartEmpty";

export default class Cart {
  apply() {
    const cartProductsDiv = document.querySelector(".cart__products");
    const sidebarDiv = document.querySelector(".cart__sidebar");
    // showCartEmptyPageIfCartEmpty();
    document.addEventListener("refreshShoppingCartContent", (e) => {
      // refresh product cards
      showCartEmptyPageIfCartEmpty();
      cartProductsDiv.innerHTML = "";
      shoppingCart.getProductsAsMap().forEach((product) => {
        cartProductsDiv.appendChild(createProductCard(product));
      });
      // refresh cart sidebar
      sidebarDiv.innerHTML = "";
      sidebarDiv.appendChild(createSideBarContent());
    });
  }
}
