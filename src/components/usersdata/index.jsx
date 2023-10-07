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
    <div className="w-full h-full bg-[#141414] flex flex-col gap-12 justify-center items-center">
      <h1 className="text-[54px]">Kim izliyor ? </h1>
      <div className="flex gap-10 w-full justify-center">
        {usersData?.map((user) => {
          return (
            <div
              onClick={() => {
                dispatch(selectUser(user));
                navigate("/home");
              }}
              key={user.id}
              className="imageHover "
            >
              <div className="flex flex-col items-center gap-5 justify-center">
                <img
                  className="w-[153.6px] h-[153.6px]"
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
  );
};

export default Users;
