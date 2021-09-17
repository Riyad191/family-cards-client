import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import "./Navbar.css";

import memories from "../../images/memories.PNG";
import * as actionType from "../../constants/actionTypes";
import HOC from "../HOC/HOC";
const Navbar = (props) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    history.push("/auth");
    setUser(null);
  };
  // useEffect is used for fetching what's in it immdeiately
  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  return (
    <section className="navbar">
      <div className="navbar__left--side">
        <a href="/" className="show__cards">
          <h4> VISIT OUR CARDS HERE </h4>
        </a>
        <img
          className="navbar__image"
          src={memories}
          alt="icon"
          height="20px"
        />
      </div>
      <h1 className="title">FAMILY CARDS</h1>
      <aside className="navbar__right--side">
        {user?.result ? (
          <div className="logout__parent">
            <div className="letter">
              <p>{user?.result.name.charAt(0)}</p>
            </div>
            <div className="navbar__username">
              <h1>{user?.result.name}</h1>
            </div>
            <button className="logout__btn" onClick={logout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="signin__btn">
            <a href="/auth">{props.children}</a>
          </div>
        )}
      </aside>
    </section>
  );
};

export default HOC(Navbar);
