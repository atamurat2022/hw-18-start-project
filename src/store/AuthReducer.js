export const authActionType = {
  LOG_IN: "LOG_IN",
  LOG_OUT: "LOG_OUT",
};

const initialState = {
  email: "",
  isAuthorizen: false,
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionType.LOG_IN:
      return {
        ...state,
        email: action.payload,
        isAuthorizen: true,
      };
    case authActionType.LOG_OUT:
      return initialState;

    default:
      return state;
  }
};
