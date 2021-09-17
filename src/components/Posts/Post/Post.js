import React from "react";
import { CardMedia } from "@material-ui/core/";
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";
import "./post.css";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../actions/posts";
// porps.post from posts

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <section className="memory--card">
      <CardMedia
        className="memory--card__img"
        image={
          post.selectedFile ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        title={post.title}
      />
      <aside className="memory--card__text">
        <h1>
          {" "}
          Card Title: <p className="memory--card__contect">{post.title}</p>{" "}
        </h1>
        <h1>
          {" "}
          User Name: <p className="memory--card__contect">{post.name}</p>
        </h1>

        <h1>
          {" "}
          Card Message:{" "}
          <p id="memory--card__message" className="memory--card__contect">
            {post.message}
          </p>{" "}
        </h1>
        <h1>
          {" "}
          Time Posted:{" "}
          <p className="memory--card__contect">
            {moment(post.createdAt).fromNow()}
          </p>
        </h1>
        <div>
          {user?.result?._id === post?.creator && (
            <button
              className="memory--card__delete"
              onClick={() => dispatch(deletePost(post._id))}
            >
              <DeleteIcon /> Delete
            </button>
          )}
        </div>
      </aside>
    </section>
  );
};

export default Post;
