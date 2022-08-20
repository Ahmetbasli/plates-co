import { shoppingCart } from "../../../utils/initShoppingCart";
import strategyWithRedPlateCampaign from "./strategyWithRedPlateCampaign";

const createSideBarContent = () => {
  const sidebarContent = document.createElement("div");
  const renderDeliveryCostHTML = () => {
    if (shoppingCart.deliveryCost === 4.95) {
      return `<div>${shoppingCart.deliveryCost}$</div>`;
    }
    return `<div>${
      shoppingCart.deliveryCost
    }$<span class="rawDeliveryCost">${4.95}$ </span> </div>`;
  };

  const renderCampaignsHTML = () => {
    const campaignsHTMLArr = [];
    for (const campaign of shoppingCart.apliedCampaignsMap.values()) {
      const div = document.createElement("div");
      div.classList.add("cart__campaign__info");
      div.innerHTML = `
      <p>${campaign.text}</p>
      <span>-${campaign.priceToDiscount.toFixed(2)}$</span>
    `;
      campaignsHTMLArr.push(div.outerHTML);
    }
    return campaignsHTMLArr.join("");
  };
  sidebarContent.innerHTML = `
  <div class="cart__lastPrice">${shoppingCart
    .checkout(strategyWithRedPlateCampaign)
    .toFixed(2)}<span>$</span></div>
  <div class="cart__checkoutBtnWrapper">
    <button>Checkout</button>
  </div>
  <p class="cart__deliveryInfo">
    Orders under $50 cost $4.95. For orders under $90, delivery costs
    $2.95. Orders of $90 or more have free delivery.
  </p>
  <div class="cart__delivery">
    <div>delivery</div>
    ${renderDeliveryCostHTML()}
  </div>
  <div class="cart__price">
    <div>products</div>
    <div>${shoppingCart.getPrice().toFixed(2)}$</div>
  </div>
  <div class="cart__campaign">
    <div>Campaigns</div>
    ${renderCampaignsHTML()}
  </div>
  `;

  return sidebarContent;
};

export default createSideBarContent;
