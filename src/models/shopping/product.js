import Item from "../base/item";
export default class Product extends Item {
  constructor(name, code, price) {
    super();
    this.setName(name);
    this.code = code;
    this.price = price;
    this.quantity = 0;
  }

  discount(strategy) {
    this.price = strategy(this.getPrice());
  }
  setQuantity(quantity) {
    this.quantity = quantity;
  }
  getQuantity() {
    return this.quantity || 0;
  }
}
