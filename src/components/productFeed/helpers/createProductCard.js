import {
  refreshCartBadge,
  refreshShoppingCartInDom,
} from "../../../utils/initCustomEvents";
import { shoppingCart } from "../../../utils/initShoppingCart";

const createProductCard = (product) => {
  const div = document.createElement("div");
  div.classList.add("productCard");
  div.innerHTML = `
    <h1>${product.name}</h1>
    <p>$${product.price}</p>
    <button id="${product.code}">Add to cart</button>`;

  div.querySelector("button").addEventListener("click", () => {
    shoppingCart.add(product);

    const addToCartSnackBar = document.querySelector(".addToCartSnackBar");
    console.log(addToCartSnackBar);
    addToCartSnackBar.style.display = "block";
    setTimeout(() => {
      addToCartSnackBar.style.display = "none";
    }, 3000);
    document.dispatchEvent(refreshShoppingCartInDom);
    document.dispatchEvent(refreshCartBadge);
  });
  return div;
};

export default createProductCard;
