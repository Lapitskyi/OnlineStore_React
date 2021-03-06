import * as axios from 'axios';

const instance = axios.create({
  baseURL: '',
  withCredentials: true,
  headers: {},
});

const authAPI = {
  getAuth() {
    return instance.get('')
      .then((response) => {
        return response.data;
      });
  },
};
export default authAPI;
