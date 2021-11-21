import { configureStore } from "@reduxjs/toolkit";

import { postsReducer } from "./posts";
import { usersReducer } from "./users";

const configureAppStore = preloadedState => {
  const store = configureStore({
    reducer: {
      posts: postsReducer,
      users: usersReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    preloadedState
  });

  return store;
};

export default configureAppStore;
