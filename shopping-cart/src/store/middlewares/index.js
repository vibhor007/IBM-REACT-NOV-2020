import { applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const rootMiddleware = applyMiddleware(logger, thunk);
export default rootMiddleware;
