import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import { verifyAuth } from "../../features/auth/authActions";
import createHistory from "history/createBrowserHistory";

export const history = createHistory();

export function configureStore() {
  const store = createStore(
    rootReducer(history),
    composeWithDevTools(applyMiddleware(thunk))
  );

  store.dispatch(verifyAuth());

  return store;
}
