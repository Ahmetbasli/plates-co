import {
  refreshCartBadge,
  refreshShoppingCartInDom,
} from "../../../utils/initCustomEvents";
import { shoppingCart } from "../../../utils/initShoppingCart";
import findProductIndexInReverseOrder from "../uitls/findProductIndexInReverseOrder";

const createProductCard = (product) => {
  const productCard = document.createElement("div");
  productCard.classList.add("cart__products__card");
  productCard.innerHTML = `
  <div class="left">
    <div class="title">${product.name}</div>
    <div class="price">${product.price}$</div>
  </div>
  <div class="right">
    <button class="increaseBtn"></button>
    <div class="count">${product.quantity}</div>
    <button class="decreaseBtn"></button>
    <button class="removeBtn"></button>
  </div>
`;

  if (product.quantity > 1) {
    productCard.querySelector(".removeBtn").style.display = "none";
    productCard.querySelector(".decreaseBtn").style.display = "block";
  }

  productCard.querySelector(".increaseBtn").addEventListener("click", () => {
    shoppingCart.add(product);
    document.dispatchEvent(refreshShoppingCartInDom);
    document.dispatchEvent(refreshCartBadge);
  });

  productCard.querySelector(".decreaseBtn").addEventListener("click", () => {
    shoppingCart.remove(
      findProductIndexInReverseOrder(shoppingCart.items, product)
    );
    document.dispatchEvent(refreshShoppingCartInDom);
    document.dispatchEvent(refreshCartBadge);
  });

  productCard.querySelector(".removeBtn").addEventListener("click", () => {
    shoppingCart.remove(
      findProductIndexInReverseOrder(shoppingCart.items, product)
    );
    document.dispatchEvent(refreshShoppingCartInDom);
    document.dispatchEvent(refreshCartBadge);
  });
  return productCard;
};

export default createProductCard;
