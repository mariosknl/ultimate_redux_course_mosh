import configureStore from "./store/configureStore";
import { loadBugs, resolveBug, assignBugToUser } from "./store/bugs";
import {
  bugAdded,
  bugResolved,
  getUnresolvedBugs,
  bugAssignedToUser,
  getBugsByUser,
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";

const store = configureStore();

// UI Layer
store.dispatch(loadBugs());

setTimeout(() => store.dispatch(assignBugToUser(1, 4)), 2000);

// store.dispatch({
//   type: "error",
//   payload: { message: "An Error Occured" },
// });

// store.dispatch(userAdded({ name: "User 1" }));
// store.dispatch(userAdded({ name: "User 2" }));
// store.dispatch(projectAdded({ name: "Project 1" }));
// store.dispatch(bugAdded({ description: "Bug 1" }));
// store.dispatch(bugAdded({ description: "Bug 2" }));
// store.dispatch(bugAdded({ description: "Bug 3" }));
// store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));
// store.dispatch(bugResolved({ id: 1 }));

// const bugs = getBugsByUser(1)(store.getState());
// console.log(bugs);
