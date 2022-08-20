import "./productFeed.scss";
import createProductCard from "./helpers/createProductCard";
import initProducts from "./helpers/initProducts";

export default class ProductFeed {
  apply() {
    const productFeedUl = document.querySelector(".productFeed");
    const products = initProducts();

    products.forEach((product) => {
      productFeedUl.appendChild(createProductCard(product));
    });
  }
}
