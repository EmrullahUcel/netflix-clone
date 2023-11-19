import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersData: [
    {
      id: 1,
      name: "Emrullah",
      avatar: "/avatars/user1.png",
    },
    {
      id: 2,
      name: "Songül",
      avatar: "/avatars/user2.png",
    },
    {
      id: 3,
      name: "Enes",
      avatar: "/avatars/user3.png",
    },
    {
      id: 4,
      name: "Nisa",
      avatar: "/avatars/user4.png",
    },
  ],
  selectedUser: null,
  users: [
    { name: "emrullah", password: "123456" },
    { name: "songul", password: "123456" },
  ],
  isLogin: false,
  authUser: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    selectUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    login: (state, action) => {
      state.isLogin = action.payload;
    },
    loginUser: (state, action) => {
      const { name, password } = action.payload;
      const user = state.users.find(
        (user) => user.name === name && user.password === password
      );
      if (user) {
        state.isLogin = true;
      } else {
        alert("kullanıcı adı yada şifre yanlış");
        state.isLogin = false;
      }
    },
  },
});

export const { selectUser, login, loginUser } = userSlice.actions;

export default userSlice.reducer;
