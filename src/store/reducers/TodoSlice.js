//file nay tach cac
//nanoid giong vs uuidv4
import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";
// redux thunk new
export const getTodos = createAsyncThunk("todos/tientai", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos?_limit=7"
  );
  return response.data;
});

//add new todos vao api
export const addTodo = createAsyncThunk("todos/addTodo", async (title) => {
  const newTodo = {
    id: nanoid(),
    title: title,
    complete: false,
  };
  await axios.post("https://jsonplaceholder.typicode.com/todos", newTodo);
  return newTodo;
});

//delete todos
export const deleteButon = createAsyncThunk(
  "todos/deleteTodo",
  async (todoID) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoID}`);
    return todoID;
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    allTodos: [
      // {
      //   id: 1,
      //   title: "Working one",
      //   complete: false,
      // },
      // {
      //   id: 2,
      //   title: "Working tow",
      //   complete: false,
      // },
      // {
      //   id: 3,
      //   title: "Working three",
      //   complete: false,
      // },
    ],
  },
  //continue
  reducers: {
    // addTodo: {
    //   //khong dc co tinh ngau nhien nano nen phai tach ra
    //   reducer(state, action) {
    //     state.allTodos.unshift(action.payload);
    //   },
    //   prepare(title) {
    //     //return giong cai action
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         title,
    //         complete: false,
    //       },
    //     };
    //   },
    // },
    //action 2

    markComplete(state, action) {
      const todoID = action.payload;
      state.allTodos = state.allTodos.map((todo) => {
        if (todo.id === todoID) todo.complete = !todo.complete;
        return todo;
      });
    },

    // deleteButon(state, action) {
    //   const todoID = action.payload;
    //   state.allTodos = state.allTodos.filter((todo) => todo.id !== todoID);
    // },

    //ket qua tu jsonplaceholder la promise nen la
    // todosFetched(state, action) {
    //   state.allTodos = action.payload;
    // },
  },
  // new fetch api thunk
  extraReducers: {
    //get api backend
    [getTodos.pending]: (state, action) => {
      console.log("Fetching todos from backend...");
    },
    [getTodos.fulfilled]: (state, action) => {
      console.log("Done");
      state.allTodos = action.payload;
    },
    [getTodos.rejected]: (state, action) => {
      console.log("Faill to get todos...!");
    },

    //addtodos
    [addTodo.fulfilled]: (state, action) => {
      console.log("Done");
      state.allTodos.unshift(action.payload);
    },

    //deletodos
    [deleteButon.fulfilled]: (state, action) => {
      console.log("Done");
      const todoID = action.payload;
      state.allTodos = state.allTodos.filter((todo) => todo.id !== todoID);
    },
  },
});

// async action creator,action and reducer dispatch
// export const getTodos = () => {
//   const getTodoAsync = async (dispatch) => {
//     //Khi được đặt trước một Promise, nó sẽ đợi cho đến khi Promise kết thúc và trả về kết quả.
//     try {
//       //?_limit=5 thi chi lay ra 5 cai thoi
//       const response = await axios.get(
//         "https://jsonplaceholder.typicode.com/todos?_limit=7"
//       );
//       dispatch(todosFetched(response.data));
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return getTodoAsync;
// };

//cach 2
// export const getTodos=()=>async dispatch=>{
//   try {
//     //?_limit=5 thi chi lay ra 5 cai thoi
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/todos?_limit=7"
//     );
//     dispatch(todosFetched(response.data));
//   } catch (error) {
//     console.log(error);
//   }
// }

//reducer trach nhiem thay doi
const todosReducer = todosSlice.reducer;

//xuat khau ra de running one
//state la noi chung ta lay trang thai
export const todosSelector = (state) => state.todosReducername.allTodos;

//xuat khau ra de running tow
export const {
  // addTodo,
  markComplete,
  // deleteButon,
  getAllTodos,
  //  todosFetched
} = todosSlice.actions;

//export reducer
export default todosReducer;
