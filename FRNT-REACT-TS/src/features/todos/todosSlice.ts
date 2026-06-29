import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type Todo = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};

type TodosResponse = {
  todos: Todo[];
  total: number;
  skip: number;
  limit: number;
};

type TodosState = {
  items: Todo[];
  loading: boolean;
  error: string | null;
};

const initialState: TodosState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchTodos = createAsyncThunk<Todo[]>(
  "todos/fetchTodos",
  async () => {
    const token = localStorage.getItem("token");

    const response = await fetch("https://dummyjson.com/auth/todos", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Ошибка загрузки списка дел");
    }

    const data: TodosResponse = await response.json();

    return data.todos;
  },
);

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.loading = false;
        state.error = "Не удалось загрузить список дел";
      });
  },
});

export default todosSlice.reducer;
