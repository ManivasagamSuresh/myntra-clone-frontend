import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    currentUser : null,
    loading:false,
    error:false
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        loginStart : (state)=>{
            state.loading = true
        },
        loginSuccess :(state,action)=>{
            state.loading = false;
            state.currentUser = action.payload;
        },
        loginFailure :(state)=>{
            state.loading = false;
            state.error = true;
        },
        logout:(state)=>{
            state.currentUser=null;
            state.loading=false;
            state.error = false;
        },
        changeAddress :(state,action)=>{
            // state.loading = false;
            console.log(state.currentUser)
            
            state.currentUser.others.address = action.payload;
        },
        AddwishlistR :(state,action)=>{
            // state.loading = false;
            // console.log(state.currentUser)
            
            state.currentUser.others.wishlist.push(action.payload);
        },
        RemovewishlistR :(state,action)=>{
            // state.loading = false;
            // console.log(state.currentUser)
            
            state.currentUser.others.wishlist.splice(state.currentUser.others.wishlist.findIndex((ele)=>
                      ele == action.payload  ),1);
                      console.log(state.currentUser.others.wishlist.findIndex((ele)=>
                      ele == action.payload  ))
        },
        AddcartR :(state,action)=>{
            // state.loading = false;
            // console.log(state.currentUser)
            
            state.currentUser.others.cart.push(action.payload);
        },
        RemovecardR :(state,action)=>{
            state.currentUser.others.cart.splice(state.currentUser.others.cart.findIndex((ele)=>
                      ele == action.payload  ),1);
        }
    }
})

export const {loginStart,loginSuccess,loginFailure,logout,changeAddress,AddwishlistR,RemovewishlistR,AddcartR}=userSlice.actions;

export default userSlice.reducer;