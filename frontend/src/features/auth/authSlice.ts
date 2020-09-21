// src/features/auth/authSlice.ts

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import authService from "./authService";
import { Login } from "../../types/auth";
import { Register } from "../../types/register";
import { STATUS } from "../../constants/Status";
import { toast } from "react-toastify";

interface AuthState {
  user: Register | null;
  token: string;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  status: string;
}

const initialState: AuthState = {
  user: null,
  token: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  status: "",
};

export const register = createAsyncThunk(
  "auth/register",
  async (userData: Register, thunkAPI) => {
    try {
      const response = await authService.register(userData);
      toast.success('Registration successful!');
      return response;
    } catch (error: any) {
      toast.error('Registration failed. ' + (error.response?.data?.message || error.message));
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (user: Login, thunkAPI) => {
    try {
      const response = await authService.login(user);
      toast.success('Login successful!');
      return response;
    } catch (error: any) {
      toast.error('Login failed. ' + (error.response?.data?.message || error.message));
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const getUser = createAsyncThunk(
  "auth/getUser",
  async (userId: number, thunkAPI) => {
    try {
      const response = await authService.getUser(userId);
      return response;
    } catch (error: any) {
      toast.error('Fetching user failed. ' + (error.response?.data?.message || error.message));
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      const response = await authService.logout();
      toast.success('Logout successful!');
      return response;
    } catch (error: any) {
      toast.error('Logout failed. ' + (error.response?.data?.message || error.message));
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authReset: (state) => {
      state.user = null;
      state.token = "";
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.status = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.status = STATUS.LOADING;
      })
      .addCase(register.fulfilled, (state, action: PayloadAction<Register>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.status = STATUS.IDLE;
      })
      .addCase(register.rejected, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.isError = true;
        state.status = STATUS.ERROR;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.status = STATUS.LOADING;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.token = action.payload;
        state.status = STATUS.IDLE;
      })
      .addCase(login.rejected, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.isError = true;
        state.status = STATUS.ERROR;
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
        state.status = STATUS.LOADING;
      })
      .addCase(getUser.fulfilled, (state, action: PayloadAction<Register>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.status = STATUS.IDLE;
      })
      .addCase(getUser.rejected, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.isError = true;
        state.status = STATUS.ERROR;
        state.user = null;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
        state.status = STATUS.LOADING;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = null;
        state.token = "";
        state.status = STATUS.IDLE;
      })
      .addCase(logout.rejected, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.isError = true;
        state.status = STATUS.ERROR;
      });
  },
});

export const { authReset } = authSlice.actions;
export default authSlice.reducer;
