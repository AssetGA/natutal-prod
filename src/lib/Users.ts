import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
  _id: string;
  name: string;
  email: string;
};

interface UserState {
  entities: User[] | null;
  error: string[] | null;
  auth: boolean;
  userId: string | null;
  isLoading: boolean;
  isLoggedIn: boolean;
  isVerify: boolean;
}

const initialState: UserState = {
  entities: [],
  isLoading: false,
  error: null,
  auth: false,
  userId: null,
  isLoggedIn: false,
  isVerify: false,
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    usersInitialize(state) {
      state.isLoading = false;
    },
    usersClearError(state, action: PayloadAction<string[] | null>) {
      state.error = action.payload;
      state.isLoading = false;
    },
    usersRequested(state) {
      state.isLoading = true;
    },
    userUnVerify(state, action: PayloadAction<{ isVerify: boolean }>) {
      state.isVerify = action.payload.isVerify;
    },
    userReceived(state, action: PayloadAction<User>) {
      state.entities = [action.payload];
      state.userId = action.payload._id;
      state.isLoading = false;
    },
    usersRequestFailed(state, action: PayloadAction<string[]>) {
      state.error = action.payload;
      state.isLoading = false;
    },
    authRequestFailed(state, action: PayloadAction<string[]>) {
      state.isLoggedIn = false;
      state.error = action.payload;
    },
    verifyRequestSend(state) {
      state.error = null;
      state.isLoading = false;
    },
    verifyRequestFailed(state, action: PayloadAction<string[]>) {
      state.error = action.payload;
      state.isLoading = false;
    },
    userCreatedVerify(state, action: PayloadAction<{ content: boolean }>) {
      state.isVerify = action.payload.content;
      state.isLoading = false;
    },
    userLoggedOut(state) {
      state.entities = null;
      state.isLoggedIn = false;
      state.isVerify = false;
    },
    userUpdateSuccessed(state, action: PayloadAction<User>) {
      if (state.entities !== null) {
        const index = state.entities.findIndex(
          (u) => u._id === action.payload._id
        );
        if (index !== -1) state.entities[index] = action.payload;
      }
      state.isLoading = false;
    },
    authRequested(state) {
      state.error = null;
    },
  },
});

// 👉 Actions из slice
const { reducer: usersReducer, actions } = usersSlice;
export const {
  usersRequested,
  usersClearError,
  userCreatedVerify,
  userReceived,
  usersRequestFailed,
  authRequestFailed,
  userLoggedOut,
  userUpdateSuccessed,
  verifyRequestSend,
  verifyRequestFailed,
  userUnVerify,
  authRequested,
} = actions;

// 👉 Отдельные (extra) actions
export const userUpdateRequested = createAction<User>(
  "users/userUpdateRequested"
);
export const userUpdateFailed = createAction<string[]>(
  "users/userUpdateFailed"
);

export default usersReducer;
