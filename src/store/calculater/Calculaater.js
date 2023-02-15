export const CalculaterActionTypes = {
  ADD: "ADD",
  SUBTRACT: "SUBTRACT",
  DIVIDE: "DIVIDE",
  MULT: "MULT",
};

const initioalState = {
  result: 0,
};

export const calcReducer = (state = initioalState, action) => {
  switch (action.type) {
    case CalculaterActionTypes.ADD:
      return {
        ...state,
        result: state.result + action.payload,
      };
    case CalculaterActionTypes.SUBTRACT:
      return {
        ...state,
        result: state.result - action.payload,
      };
    case CalculaterActionTypes.DIVIDE:
      return {
        ...state,
        result: state.result / action.payload,
      };
    case CalculaterActionTypes.MULT:
      return {
        ...state,
        result: state.result * action.payload,
      };
    default:
      return state;
  }
};
