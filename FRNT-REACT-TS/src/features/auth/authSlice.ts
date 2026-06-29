import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type User = {
  id: number | null;
  name: string;
  email: string;
  isAuth: boolean;
};

type AuthState = {
  user: User;
  token: string | null;
  loading: boolean;
  error: string | null;
};

type LoginData = {
  username: string;
  password: string;
};

type RegisterData = {
  name: string;
  email: string;
  password: string;
};

type AuthResponse = {
  id: number;
  username: string;
  email: string;
  accessToken: string;
};

const initialState: AuthState = {
  user: {
    id: null,
    name: "",
    email: "",
    isAuth: false,
  },
  token: localStorage.getItem("token"),
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk<AuthResponse, LoginData>(
  "auth/loginUser",
  async (data) => {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
        expiresInMins: 30,
      }),
    });

    if (!response.ok) {
      throw new Error("Ошибка авторизации");
    }

    return response.json();
  },
);

export const registerUser = createAsyncThunk<AuthResponse, RegisterData>(
  "auth/registerUser",
  async (data) => {
    await fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data.name,
      }),
    });

    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "emilys",
        password: "emilyspass",
        expiresInMins: 30,
      }),
    });

    if (!response.ok) {
      throw new Error("Ошибка регистрации");
    }

    return response.json();
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = {
        id: null,
        name: "",
        email: "",
        isAuth: false,
      };
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = {
          id: action.payload.id,
          name: action.payload.username,
          email: action.payload.email,
          isAuth: true,
        };
        state.token = action.payload.accessToken;
        localStorage.setItem("token", action.payload.accessToken);
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
        state.error = "Не удалось авторизоваться";
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = {
          id: action.payload.id,
          name: action.payload.username,
          email: action.payload.email,
          isAuth: true,
        };
        state.token = action.payload.accessToken;
        localStorage.setItem("token", action.payload.accessToken);
      })
      .addCase(registerUser.rejected, (state) => {
        state.loading = false;
        state.error = "Не удалось зарегистрироваться";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
