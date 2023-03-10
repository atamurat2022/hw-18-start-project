import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActionType } from "../store/AuthReducer";
import classes from "./Auth.module.css";

const Auth = () => {
  const [formState, setState] = useState({
    email: "",
    password: "",
  });

  const inputChangeHandler = (name) => {
    return (event) => {
      setState((prevState) => ({ ...prevState, [name]: event.target.value }));
    };
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      formState.email === "test@mail.com" &&
      formState.password === "12345678"
    ) {
      dispatch({
        type: authActionType.LOG_IN,
        payload: formState.email,
      });
    }
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={inputChangeHandler("email")}
              value={formState.email}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={inputChangeHandler("password")}
              value={formState.password}
            />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
