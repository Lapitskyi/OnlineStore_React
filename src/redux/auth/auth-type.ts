export interface AuthState {
  isAuth: boolean,
  userId: number | null,
  login: string | null,
  password: string | null,
}

export enum AuthTypeAction {
  SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA',
}

interface SetAuthUserDataAction {
  type: AuthTypeAction.SET_AUTH_USER_DATA,
  payload: {
    userId: number | null,
    login: string | null,
    password: string | null
  }
}

export type AuthAction = SetAuthUserDataAction;
