import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

export const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    usersAdd: (state, action) => {
      return [...state, ...action.payload];
    }
  }
});

export const { usersAdd } = usersSlice.actions;

export const loadUsers = () => async dispatch => {
  const resp = await instance.get("/users");
  dispatch(usersAdd(resp.data));
};

export const usersReducer = usersSlice.reducer;
