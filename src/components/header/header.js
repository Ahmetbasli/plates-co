import { shoppingCart } from "../../utils/initShoppingCart";
import showCartEmptyPageIfCartEmpty from "../cart/helpers/showCartEmptyPageIfCartEmpty";
import "./header.scss";
import createBadge from "./helpers/createBadge";

export default class Header {
  apply() {
    const basket = document.querySelector(".header__basket");
    const backToShopping = document.querySelector(".header__backToShopping");
    const productFeed = document.querySelector(".productFeed");
    const cart = document.querySelector(".cart");
    const cartEmptyPage = document.querySelector(".cartEmptyPage");
    basket.addEventListener("click", () => {
      basket.style.visibility = "hidden";
      backToShopping.style.visibility = "visible";
      productFeed.style.display = "none";
      cart.style.display = "flex";
      showCartEmptyPageIfCartEmpty();
    });

    backToShopping.addEventListener("click", () => {
      basket.style.visibility = "visible";
      backToShopping.style.visibility = "hidden";
      productFeed.style.display = "flex";
      cart.style.display = "none";
      cartEmptyPage.style.display = "none";
    });

    document.addEventListener("refreshCartBadge", (e) => {
      basket.innerHTML = "";
      if (shoppingCart.getProductsAsMap().size !== 0) {
        basket.appendChild(createBadge());
      }
    });
  }
}
