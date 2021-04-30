const ON_SHOW_MENU = 'ON_SHOW_MENU';
const CLOSE_SHOW_MENU = 'CLOSE_SHOW_MENU';

const initialState = {
  isMenuShow: false,
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_SHOW_MENU:
      return {
        ...state,
        isMenuShow: !!action.isMenuShow === false
      };
    case CLOSE_SHOW_MENU:
      return {
        ...state,
        isMenuShow: false
      };

    default:
      return state;
  }
};

export const showMenu = (isMenuShow) => ({ type: ON_SHOW_MENU, isMenuShow });
export const closeShowMenu = () => ({ type: CLOSE_SHOW_MENU, });
export default menuReducer;
