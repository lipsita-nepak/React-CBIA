import { actionTypes } from "../services/crop_Types";

const INITIAL_STATE = {
  crops: [],
};
const crop_reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_CROPS:
      return { ...state, crops: payload };
    default:
      return state;
  }
};
export default crop_reducer;