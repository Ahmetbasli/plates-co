import Composite from "../base/composite";
export default class ShoppingCart extends Composite {
  constructor() {
    super();
    if (typeof ShoppingCart._instance === "object")
      return ShoppingCart._instance;
    ShoppingCart._instance = this;

    this.setName("shoppingCart");
    this.apliedCampaignsMap = new Map();
  }

  applyNewCampaign({ key, campaign }) {
    this.apliedCampaignsMap.set(key, campaign);
  }

  removeCampaign({ key }) {
    this.apliedCampaignsMap.delete(key);
  }
  checkout(strategy) {
    return strategy(this.getPrice());
  }

  setDeliveryCost(cost) {
    this.deliveryCost = cost;
  }

  getProductsAsMap() {
    const itemsMap = new Map();
    this.items.forEach((product) => {
      if (itemsMap.get(product.code)) {
        itemsMap
          .get(product.code)
          .setQuantity(itemsMap.get(product.code).quantity + 1);
      } else {
        product.setQuantity(1);
        itemsMap.set(product.code, product);
      }
    });

    return itemsMap;
  }
}
