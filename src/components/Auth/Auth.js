import React, { useEffect, useState } from "react";
import { useDispatch, connect } from "react-redux";
import { useHistory } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { signin, signup } from "../../actions/auth";
import HOC from "../HOC/HOC";
import "./styles.css";
import Input from "./Input";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};
const SignUp = (props) => {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();

  const history = useHistory();

  const [showPassword, setShowPassword] = useState(false);

  const [isSignup, setIsSignup] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const [errorMsg, setErrMsg] = useState("");

  useEffect(() => {
    setErrMsg(props.errorMsg);
  }, [props.errorMsg]);

  const switchMode = () => {
    console.log("switch sign method +++");
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setErrMsg("");
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(form, history));
    } else {
      dispatch(signin(form, history));
    }
  };
  // ===========================================================
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  // ===========================================================
  return (
    <section className="auth__card">
      <aside className="paper">
        <h1 className="avatar">
          <LockOutlinedIcon />
        </h1>
        <h1>
          {isSignup ? (
            <p className="sign_up">Sign Up</p>
          ) : (
            <div className="HOC__SignIn">{props.children}</div>
          )}
        </h1>
        <form className="auth__form" onSubmit={handleSubmit}>
          <div className="newclass">
            {isSignup && (
              <div className="signUp__inputs">
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                />
              </div>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
          </div>

          <h1 className="error__msg">
            {errorMsg ? (
              <div className="HOC__SignIn">{errorMsg}</div>
            ) : (
              <div></div>
            )}
          </h1>

          <button
            type="submit"
            variant="contained"
            color="primary"
            className="submit"
          >
            {isSignup ? "Sign up" : "Sign in"}
          </button>
          <div className="btnParent">
            <button className="account__btn" onClick={switchMode}>
              {isSignup
                ? "Already have an account? Sign in"
                : "Don't have an account? Sign Up"}
            </button>
          </div>
        </form>
      </aside>
    </section>
  );
};
const mapStateToProps = (state) => {
  return {
    errorMsg: state.auth.errMsg,
  };
};
export default HOC(connect(mapStateToProps, {})(SignUp));
