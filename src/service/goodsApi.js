import * as axios from 'axios';

const instance = axios.create({
  baseURL: '',
  withCredentials: true,
  headers: {},
});

const goodsAPI = {
  getGoods() {
    return instance.get('')
      .then((response) => {
        return response.data;
      });
  },

  // eslint-disable-next-line no-unused-vars
  getProduct(productId) {
    return instance.get('')
      .then((response) => {
        return response.data;
      });
  }
};
export default goodsAPI;
