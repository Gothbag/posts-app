import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import NavBar from "./components/nav-bar";
import Home from "./containers/home";
import PostPage from "./containers/post-page";
import PostForm from "./containers/post-form";

function App() {
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
