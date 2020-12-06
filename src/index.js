import store from "./store";
import { bugAdded, bugResolved } from "./actions";

store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugAdded("Bug 2"));
store.dispatch(bugAdded("Bug 3"));
store.dispatch(bugResolved(1));

console.log(store.getState());
