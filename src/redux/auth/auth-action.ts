import authAPI from '../../service/authAPI';
import { AuthTypeAction } from './auth-type';

export const setAuthUserData = (userId: number, login: string, password: string) => (
  { type: AuthTypeAction.SET_AUTH_USER_DATA, data: { userId, login, password } });

export const getAuthUserData = () => (dispatch: any) => {
  authAPI.getAuth()
    .then((data: { resultCode?: any; userId?: any; login?: any; password?: any; }) => {
      if (data.resultCode === 0) {
        const { userId, login, password } = data;
        dispatch(setAuthUserData(userId, login, password));
      }
    });
};
