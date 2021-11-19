import { Link } from "react-router-dom";

import "./PostList.css";

export default function PostList({ posts }) {
  return (
    <ul className="post-list">
      {posts.map(post => (
        <li key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}
