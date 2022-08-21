export let refreshShoppingCartInDom;
export let refreshCartBadge;
const initCustomEvents = () => {
  refreshShoppingCartInDom = new CustomEvent("refreshShoppingCartContent");
  refreshCartBadge = new CustomEvent("refreshCartBadge");
};
export default initCustomEvents;
