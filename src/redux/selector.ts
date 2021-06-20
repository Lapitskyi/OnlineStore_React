export const getGoods = (goods: { goods: any [] }) => (
  goods.goods
);

export const getProduct = (goods: { product: any }) => (
  goods.product
);

export const getBasketProduct = (goodsOrder: { products: any [] }) => (
  goodsOrder.products
);

export const getIsFetching = (goods: { isFetching: boolean }) => (
  goods.isFetching
);

export const getPageSize = (goods: { pageSize: number }) => (
  goods.pageSize
);

export const getTotalCount = (goods: { totalCount: number }) => (
  goods.totalCount
);

export const getCurrentPage = (goods: { currentPage: number }) => (
  goods.currentPage
);

export const getPortionSize = (goods: { portionSize: number }) => (
  goods.portionSize
);

export const getGoodsOrder = (basket: { goodsOrder: any }) => (
  basket.goodsOrder
);
