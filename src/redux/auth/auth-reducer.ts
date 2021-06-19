import { AuthAction, AuthState, AuthTypeAction } from './auth-type';

const initialState:AuthState = {
  isAuth: false,
  userId: null,
  login: null,
  password: null,
};

const authReducer = (state = initialState, action:AuthAction): AuthState => {
  switch (action.type) {
    case AuthTypeAction.SET_AUTH_USER_DATA: {
      return {
        ...state,
        ...action.payload,
        isAuth: true,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
