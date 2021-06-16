import authAPI from '../../service/authAPI';
import { SET_AUTH_USER_DATA } from './auth-type';

export const setAuthUserData = (userId, login, email) => ({ type: SET_AUTH_USER_DATA, data: { userId, login, email } });

export const getAuthUserData = () => (dispatch) => {
  authAPI.getAuth()
    .then((data) => {
      if (data.resultCode === 0) {
        const { id, login, email } = data;
        dispatch(setAuthUserData(id, login, email));
      }
    });
};
