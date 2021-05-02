import authAPI from '../service/authAPI';

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

const initialState = {
  isAuth: false,
  userId: null,
  login: null,
  email: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      };
    default:
      return state;
  }
};

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
export default authReducer;
