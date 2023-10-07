import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../components/login";

const PrivateRoute = () => {
  const isLogin = useSelector((state) => state.userSlice.isLogin);
  return isLogin ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
