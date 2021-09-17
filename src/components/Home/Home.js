import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Home.css";
import { getPosts } from "../../actions/posts";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <section className="home__page">
      <aside div className="memories__parent">
        <Posts setCurrentId={setCurrentId} />
      </aside>
      <aside className="poster__parent">
        <Form currentId={currentId} setCurrentId={setCurrentId} />
      </aside>
    </section>
  );
};

export default Home;
