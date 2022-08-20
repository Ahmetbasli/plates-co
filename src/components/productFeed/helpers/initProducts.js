import Product from "../../../../models/shopping/product";
import products from "../../../data/products.json";
const initProducts = () => {
  return products.map(
    (product) => new Product(product.name, product.code, product.price)
  );
};
export default initProducts;
