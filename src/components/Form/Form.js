import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import FileBase from "react-file-base64";
import { createPost } from "../../actions/posts";
import "./Form.css";
const Form = ({ currentId }) => {
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    selectedFile: "",
  });

  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  const clear = () => {
    setPostData({ title: "", message: "", selectedFile: "" });
  };
  const handleClick = async (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
      clear();
    }
  };
  if (!user?.result?.name) {
    return (
      <h1 className="please__signin">
        Please Sign In to create your own memories and see other's memories.
      </h1>
    );
  }
  return (
    <div className="post">
      <form className="post__form">
        <h1 className="post__title">create a card</h1>
        <TextField
          name="title"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <br />
        <TextField
          name="message"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <br />

        <div className="choose__file">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <br />
        <button className="post__submit" type="submit" onClick={handleClick}>
          Submit
        </button>
        <button className="post__clear" onClick={clear}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default Form;
