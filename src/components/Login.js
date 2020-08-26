import React from "react";
import "./login.css";
import { loginUrl } from "../spotify";

const Login = () => {
  return (
    <div className="login">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
        alt="Spotify Logo"
      />
      <a href={loginUrl}>Log in with Spotify</a>
    </div>
  );
};

export default Login;
