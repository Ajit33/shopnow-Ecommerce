import { createSlice } from "@reduxjs/toolkit"

const initialState={
   isAuthenticate:false,
   isLoading:false,
   user:null
}



const authSclice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setUser:(state,action)=>{

        }
    }
})

export const {setUser} =authSclice.actions;
export default authSclice.reducer