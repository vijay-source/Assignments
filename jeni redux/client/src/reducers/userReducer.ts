import * as Constatnts from "./constants";

const initialState = {
  user: {},
  token: "",
  isLoggedIn: false,
  status: "",
  message: "",
};

const userReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case Constatnts.Status:
      return {
        ...state,
        status: action.payload.status,
        message: action.payload.message,
      };
    case Constatnts.LOGIN_USER:
      return {
        ...state,
        token: action.payload.token,
        isLoggedIn: true,
        user: action.payload.user,
      };
    case Constatnts.REGISTER_USER:
      return { ...state };
    case Constatnts.LOGOUT:
      return {
        ...state,
        token: "",
        user: null,
        isLoggedIn: false,
        status: "",
        message: "",
      };
    default:
      return state;
  }
};

export default userReducer;
