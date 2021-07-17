//variable new redux
import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./reducers/TodoSlice";
//store tao cai kho luu tru du lieu
const store = configureStore({
  reducer: {
    todosReducername: todosReducer, //lay ra ba viec tren
  },
});
export default store;
