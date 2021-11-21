import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";

import NavBar from "./components/nav-bar";
import Home from "./containers/home";
import PostPage from "./containers/post-page";
import { loadPosts, postsSelector } from "./redux/posts";
import { loadUsers, usersSelector } from "./redux/users";

function App() {
  const dispatch = useDispatch();

  const posts = useSelector(postsSelector);

  const users = useSelector(usersSelector);

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(loadPosts());
    }
  }, []);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(loadUsers());
    }
  }, []);

  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <h2>Posts</h2>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
