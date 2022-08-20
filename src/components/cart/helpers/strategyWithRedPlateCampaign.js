import { shoppingCart } from "../../../utils/initShoppingCart";
import addDeliverCost from "./addDeliveryCost";

const strategyWithRedPlateCampaign = (price) => {
  if (shoppingCart.getProductsAsMap().get("R01")?.quantity > 1) {
    shoppingCart.applyNewCampaign({
      key: "RedPlateCampaign",
      campaign: {
        text: "Buy one red plate, get the second half price.",
        priceToDiscount: Number(
          shoppingCart.getProductsAsMap().get("R01").getPrice() / 2
        ).toFixed(2),
      },
    });
    console.log(
      shoppingCart.getProductsAsMap().get("R01").getPrice(),
      shoppingCart.getProductsAsMap().get("R01").getPrice() / 2
    );
    return addDeliverCost(
      price -
        shoppingCart.apliedCampaignsMap.get("RedPlateCampaign").priceToDiscount
    );
  } else {
    if (shoppingCart.apliedCampaignsMap.get("RedPlateCampaign")) {
      shoppingCart.removeCampaign({ key: "RedPlateCampaign" });
    }
    return addDeliverCost(price);
  }
};

export default strategyWithRedPlateCampaign;
