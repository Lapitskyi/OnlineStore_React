import * as axios from 'axios';

const instance = axios.create({
  baseURL: '',
  withCredentials: true,
  headers: {},
});

const promotionsApi = {
  getPromotions() {
    return instance.get('')
      .then((response) => {
        return response.data;
      });
  },
  getNewProducts() {
    return instance.get('')
      .then((response) => {
        return response.data;
      });
  }
};
export default promotionsApi;
