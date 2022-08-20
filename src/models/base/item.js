export default class Item {
  constructor() {}
  getPrice() {
    return this.price || 0;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
}
