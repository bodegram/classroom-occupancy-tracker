import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/api";

export const loginAsync = createAsyncThunk(
  "auth/loginAsync",
  async (credentials, { dispatch, rejectWithValue }) => {
    try{
        dispatch(getLoginRequest())
        console.log('payload', credentials);
         const { data } = await api.post('/auth', credentials)

      
        console.log('login-data', data);
    }
    catch(error){
        console.log('error',  error);
        return rejectWithValue('An error occurred')
    }

  }
);

const initialState = {
  isAuthenticated: false,
  data: null,
  loading: false,
  error: false,
  errorMessage: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getLoginRequest: (state)=>{
        state.loading = true
    },
    getLoginSuccess: (state, action)=>{
        state.isAuthenticated = true
        state.data = action.payload
    },
    getLoginFail: (state, action)=>{
        state.error = true
        state.errorMessage = action.payload
    }
  },
});

export const {
    getLoginFail,
    getLoginRequest,
    getLoginSuccess
    } = authSlice.actions

export default authSlice;
