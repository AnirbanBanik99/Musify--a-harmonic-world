import React from "react";
import "./Login.css";
import { loginurl } from "./spotify";

function Login() {
    return (
      <div className="login">
          <img src="\Musify.png" alt="" />
        
        {/*Login with spotify button*/}
        <a href={loginurl}>LOGIN WITH SPOTIFY</a>
      </div>
    );
}

export default Login;