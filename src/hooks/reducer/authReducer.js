import { typesActionsAuth } from '../../common/types';

const initialState = {
  isLogin: false,
};

const authReducer = (state = initialState, action = null) => {
  const { type, payload } = action;
  switch (type) {
    case typesActionsAuth.authLogin:
      const newState = {
        ...state,
        isLogin: true,
        personalInfo: payload?.personalInfo,
        token: payload?.token,
      };
      return newState;
    case typesActionsAuth.authLogout:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
