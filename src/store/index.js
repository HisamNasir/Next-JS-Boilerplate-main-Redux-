import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice"
import React from "react";
import ReactDOM from "react-dom";
import App from "@/pages/_app";
// import "./index.css";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;
