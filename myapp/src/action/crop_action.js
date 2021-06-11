import { actionTypes } from "../services/crop_Types";
export const setcrops = (crops) => {
  return {
    type: actionTypes.SET_CROPS,
    payload: crops,
  };
};

export const selectedcrop = (crop) => {
  return {
    type: actionTypes.SELECTED_CROP,
    payload: crop,
  };
};