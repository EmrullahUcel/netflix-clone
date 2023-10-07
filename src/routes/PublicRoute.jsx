import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../components/login";

const PublicRoute = () => {
  const isLogin = useSelector((state) => state.userSlice.isLogin);
  return isLogin ? <Outlet /> : <Login />;
};

export default PublicRoute;
