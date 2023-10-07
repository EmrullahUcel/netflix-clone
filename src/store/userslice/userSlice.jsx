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
    { name: "songül", password: "123456" },
  ],
  isLogin: false,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    selectUser: (state, action) => {
      state.selectedUser = action.payload;
      console.log(state.selectedUser);
    },
    login: (state, action) => {
      state.isLogin = action.payload;
      console.log(state.isLogin);
    },
  },
});

export const { selectUser, login } = userSlice.actions;

export default userSlice.reducer;
