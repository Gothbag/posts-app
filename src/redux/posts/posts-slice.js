import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

export const postsSlice = createSlice({
  name: "posts",
  initialState: { list: [], focusedItem: {} },
  reducers: {
    postsAdd: (state, action) => {
      return { ...state, list: [...state.list, action.payload] };
    },
    postsFocusItem: (state, action) => {
      const { payload: id } = action;
      const searchedItemArr = state.list.filter(item => item.id === id);
      if (searchedItemArr) {
        return { ...state, focusedItem: searchedItemArr[0] };
      }
      return { ...state, focusedItem: {} };
    }
  }
});

export const { postsAdd, postsFocusItem } = postsSlice.actions;

export const loadPosts = () => async dispatch => {
  const resp = await instance.get("/posts");
  dispatch(postsAdd(resp.data));
};

const addNewPost = post => dispatch => {
  const id = uuidv4();
  dispatch(postsAdd({ ...post, id }));
};

export const postAdd = newPostMock;

export const postsReducer = postsSlice.reducer;
