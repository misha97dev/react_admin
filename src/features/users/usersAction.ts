import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://api.slingacademy.com/v1/sample-data/users";

export const getAllUsers = createAsyncThunk(
  "getAllUsers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${url}?offset=10&limit=20`);
      return response.data;
    } catch (err: any) {
      const message = (err.response && err.response.data) || err.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getOneUser = createAsyncThunk(
  "getOneUser",
  async (userId: number, thunkAPI) => {
    // userId is passed here
    try {
      const response = await axios.get(`${url}/${userId}`); // Use userId in the URL
      return response.data;
    } catch (err: any) {
      const message = (err.response && err.response.data) || err.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
