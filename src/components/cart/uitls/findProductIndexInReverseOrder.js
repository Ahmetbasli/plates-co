const findProductIndexInReverseOrder = (productArr, product) => {
  for (let i = 0; i < productArr.length; i++) {
    if (productArr[productArr.length - i - 1].code === product.code) {
      return productArr.length - i - 1;
    }
  }
};

export default findProductIndexInReverseOrder;
