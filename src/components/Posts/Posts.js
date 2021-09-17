import React from "react";
import { CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import "./posts.css";
import Post from "./Post/Post";
const Posts = ({ setCurrentId }) => {
  {
    /* posts is coming from [...posts, action.payload] in reducers */
  }
  // no useDispatch for posts because it isn't a function (event handler) unlike delete
  const posts = useSelector((state) => state.posts);
  // if there aren't posts show spinner
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <section className="post__parent">
      {/* else show posts */}
      {posts.map((post) => (
        <div key={post._id}>
          <Post post={post} setCurrentId={setCurrentId} />
        </div>
      ))}
    </section>
  );
};
export default Posts;
