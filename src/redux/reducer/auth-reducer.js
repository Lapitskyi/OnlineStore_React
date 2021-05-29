import { SET_AUTH_USER_DATA } from '../type';

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

export default authReducer;
