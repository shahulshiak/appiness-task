import { createStore, combineReducers } from "redux";

import AppReducer from './reducers/app';

const rootReducers = combineReducers({
  app: AppReducer
});

const storeConfig = createStore(rootReducers);

export default storeConfig;
