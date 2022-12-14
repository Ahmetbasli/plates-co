import "./index.scss";

import initCustomEvents from "./utils/initCustomEvents";
import initShoppingCart from "./utils/initShoppingCart";

import ProductFeed from "./components/productFeed/productFeed";
import Cart from "./components/cart/cart";
import Header from "./components/header/header";

initCustomEvents();
initShoppingCart();
const header = new Header();
const productFeed = new ProductFeed();
const cart = new Cart();

header.apply();
productFeed.apply();
cart.apply();
