import axios from 'axios';

const instance = axios.create({
  baseURL: '',
  withCredentials: true,
  headers: {},
});

const goodsAPI = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getGoods(currentPage: number, pageSize: number) {
    return instance.get('')
      .then((response: { data: any; }) => {
        return response.data;
      });
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/explicit-module-boundary-types
  getProduct(productId: number) {
    return instance.get('')
      .then((response: { data: any; }) => {
        return response.data;
      });
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/explicit-module-boundary-types
  getCurrentPage(pageNumber: number, pageSize: number) {
    return instance.get('')
      .then((response: { data: any; }) => {
        return response.data;
      });
  },
};
export default goodsAPI;
