import React, { useEffect } from "react";
import LoginHeader from "./loginheader";
import LoginFrom from "./loginform";
import LoginFooter from "./loginfooter";

const Login = () => {
  return (
    <div className="w-full z-30 flex flex-col justify-center items-center bg-[url('/loginBg/loginbg.jpg')] 
    before:content-[''] before:absolute before:top-0 before:left-0 before:bottom-[-90px] before:right-0 before:bg-black before:opacity-60 bg-cover
    before:z-0 
    ">
      <LoginHeader />
      <LoginFrom />
      <LoginFooter />
    </div>
  );
};

export default Login;
