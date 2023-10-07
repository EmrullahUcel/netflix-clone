import React, { useState } from "react";
import { useSelector } from "react-redux";

const Users = () => {
  const selectedUser = useSelector((state) => state.userSlice.selectedUser);
  const usersData = useSelector((state) => state.userSlice.usersData);
  const [hover, setHover] = useState(false);

  const user = () => {
    setHover(true);
  };
  return (
    <div className="">
      <img
        onMouseEnter={user}
        onMouseLeave={() => setHover(false)}
        className="w-8 h-8"
        src={selectedUser?.avatar}
      />
      {hover &&
        usersData.map((user) => {
          return <div>{user.name} </div>;
        })}
    </div>
  );
};

export default Users;
