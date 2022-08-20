import Item from "./item";
export default class Composite extends Item {
  constructor() {
    super();
    this.items = [];
  }
  add(item) {
    this.items.push(item);
  }
  remove(index) {
    if (this.items.length === 0) return;
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
  getPrice() {
    return this.items.reduce((acc, item) => {
      return acc + item.getPrice();
    }, 0);
  }
}
