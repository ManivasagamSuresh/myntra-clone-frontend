import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },
    changeAddress: (state, action) => {
      console.log(state.currentUser);

      state.currentUser.others.address = action.payload;
    },
    AddwishlistR: (state, action) => {
      state.currentUser.others.wishlist.push(action.payload);
    },
    RemovewishlistR: (state, action) => {
      state.currentUser.others.wishlist.splice(
        state.currentUser.others.wishlist.findIndex(
          (ele) => ele == action.payload
        ),
        1
      );
      console.log(
        state.currentUser.others.wishlist.findIndex(
          (ele) => ele == action.payload
        )
      );
    },
    AddcartR: (state, action) => {
      state.currentUser.others.cart.push(action.payload);
    },
    RemovecartR: (state, action) => {
      state.currentUser.others.cart.splice(
        state.currentUser.others.cart.findIndex((ele) => ele == action.payload),
        1
      );
    },
    Emptycart: (state, action) => {
      state.currentUser.others.cart.length = 0; 
    },
    EmptyTotalprice: (state, action) => {
      state.currentUser.others.totalprice.length = 0; 
    },
    TotalPrice: (state, action) => {
      let index = state.currentUser.others.totalprice.findIndex(
        (ele) => ele.id == action.payload.id
      );
      if (index == -1) {
        state.currentUser.others.totalprice.push(action.payload);
      } else {
        state.currentUser.others.totalprice.splice(index, 1, action.payload);
      }
    },
    RemoveTotalPrice: (state, action) => {
      let index = state.currentUser.others.totalprice.findIndex(
        (ele) => ele.id == action.payload.id
      );

      state.currentUser.others.totalprice.splice(index, 1);
    },
    ChangePrice: (state, action) => {
      let index = state.currentUser.others.totalprice.findIndex(
        (ele) => ele.id == action.payload.id
      );
      if (index != -1) {
        state.currentUser.others.totalprice.splice(index, 1, action.payload);
      }
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  changeAddress,
  AddwishlistR,
  RemovewishlistR,
  AddcartR,
  RemovecartR,
  TotalPrice,
  ChangePrice,
  RemoveTotalPrice,
  Emptycart,
  EmptyTotalprice
} = userSlice.actions;

export default userSlice.reducer;
