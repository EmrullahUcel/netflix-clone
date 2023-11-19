import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "/src/store/userslice/userSlice";
import { login } from "../../store/userslice/userSlice";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const usersData = useSelector((state) => state.userSlice.usersData);
  const islogin = useSelector((state) => state.userSlice.islogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const offline = () => {
    dispatch(login(false));
    navigate("/");
  };

  return (
    <div className=" flex w-screen h-screen bg-[#141414] justify-center items-center">
      <div className="w-full flex flex-col gap-12 justify-center items-center">
        <h1 className="text-[54px]">Kim izliyor ? </h1>
        <div className="inline-flex justify-center gap-[3%] mx-[10%] w-[90%] sm:flex-wrap">
          {usersData?.map((user) => {
            return (
              <div
                onClick={() => {
                  dispatch(selectUser(user));
                  navigate("/home");
                }}
                key={user.id}
             
              >
                <div className="flex flex-col items-center gap-5 justify-center ">
                  <img
                    className="w-[99%] min-w-[80px] max-w-[154px] max-h-[153.6px] min-h-[80px] cursor-pointer sm:w-[80px]" 
                    src={user?.avatar}
                    alt={user?.name}
                  />
                  <div>{user?.name}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <button onClick={offline}>Profil Yönetimi</button>
        </div>
      </div>
    </div>
  );
};

export default Users;
