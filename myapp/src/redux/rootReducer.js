import { combineReducers } from "redux";
import crop_reducer from "../reducer/crop_reducer";

const rootReducer = combineReducers({
  crop: crop_reducer,
});
export default rootReducer;