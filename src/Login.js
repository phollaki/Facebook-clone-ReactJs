import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
function Login(props) {
  const signIn = (e) => {};
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
