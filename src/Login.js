import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
function Login(props) {
  const [{}, dispatch] = useStateValue();

  const signIn = (e) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg" />

        <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" />
      </div>
      <div className="login__loginButton">
        <Button type="submit" onClick={signIn}>
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default Login;
