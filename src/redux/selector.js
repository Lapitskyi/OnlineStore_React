export const getGoods = (goods) => (
  goods.goods
);

export const getProduct = (goods) => (
  goods.product
);

export const getBasketProduct = (goodsOrder) => (
  goodsOrder.products
);

export const getIsFetching = (goods) => (
  goods.isFetching
);

export const getPageSize = (goods) => (
  goods.pageSize
);

export const getTotalCount = (goods) => (
  goods.totalCount
);

export const getCurrentPage = (goods) => (
  goods.currentPage
);

export const getPortionSize = (goods) => (
  goods.portionSize
);

export const getGoodsOrder = (basket) => (
  basket.goodsOrder
);
