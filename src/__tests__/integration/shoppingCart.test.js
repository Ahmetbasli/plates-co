import strategyWithRedPlateCampaign from "../../components/cart/helpers/strategyWithRedPlateCampaign";
import Product from "../../models/shopping/product";
import initShoppingCart, { shoppingCart } from "../../utils/initShoppingCart";

describe("shopping cart", () => {
  it("add B01, G01", () => {
    initShoppingCart();
    const bluePlate = new Product("Blue Plate", "B01", 7.95);
    const greenPlate = new Product("Green Plate", "G01", 24.95);

    shoppingCart.add(bluePlate);
    shoppingCart.add(greenPlate);

    expect(shoppingCart.checkout(strategyWithRedPlateCampaign).toFixed(2)).toBe(
      "37.85"
    );
  });

  it("remove B01, G01 & add R01, R01", () => {
    shoppingCart.remove(1);
    shoppingCart.remove(0);

    const redPlate = new Product("Red Plate", "R01", 32.95);
    const redPlate2 = new Product("Red Plate", "R01", 32.95);

    shoppingCart.add(redPlate);
    shoppingCart.add(redPlate2);

    expect(shoppingCart.checkout(strategyWithRedPlateCampaign).toFixed(2)).toBe(
      "54.37"
    );
  });

  it("remove  R01, R01 & add R01, G01", () => {
    shoppingCart.remove(1);
    shoppingCart.remove(0);

    const redPlate = new Product("Red Plate", "R01", 32.95);
    const greenPlate = new Product("Green Plate", "G01", 24.95);

    shoppingCart.add(redPlate);
    shoppingCart.add(greenPlate);

    expect(shoppingCart.checkout(strategyWithRedPlateCampaign).toFixed(2)).toBe(
      "60.85"
    );
  });

  it("remove  R01, G01 & add B01, B01, R01, R01, R01", () => {
    shoppingCart.remove(1);
    shoppingCart.remove(0);

    const bluePlate = new Product("Blue Plate", "B01", 7.95);
    const bluePlate1 = new Product("Blue Plate", "B01", 7.95);
    const redPlate = new Product("Red Plate", "R01", 32.95);
    const redPlate1 = new Product("Red Plate", "R01", 32.95);
    const redPlate2 = new Product("Red Plate", "R01", 32.95);

    shoppingCart.add(bluePlate);
    shoppingCart.add(bluePlate1);
    shoppingCart.add(redPlate);
    shoppingCart.add(redPlate1);
    shoppingCart.add(redPlate2);

    expect(shoppingCart.checkout(strategyWithRedPlateCampaign).toFixed(2)).toBe(
      "98.27"
    );
  });
});
