import React, { useEffect } from "react";
import LoginHeader from "./loginheader";
import LoginFrom from "./loginform";
import LoginFooter from "./loginfooter";

const Login = () => {
  

  return (
    <div className="w-full flex flex-col justify-center items-center bg-[url('/loginBg/loginbg.jpg')]  bg-cover">
      <LoginHeader />
      <LoginFrom />
      <LoginFooter />
    </div>
  );
};

export default Login;
