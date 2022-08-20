import {
  refreshCartBadge,
  refreshShoppingCartInDom,
  shoppingCart,
} from "../../../utils/initShoppingCart";

const createProductCard = (product) => {
  const li = document.createElement("li");
  li.classList.add("productCard");
  li.innerHTML = `
    <h1>${product.name}</h1>
    <p>$${product.price}</p>
    <button id="${product.code}">Add to cart</button>`;

  li.querySelector("button").addEventListener("click", () => {
    shoppingCart.add(product);
    document.dispatchEvent(refreshShoppingCartInDom);
    document.dispatchEvent(refreshCartBadge);
  });
  return li;
};

export default createProductCard;
