import { createSlice } from "@reduxjs/toolkit";
const slice=createSlice({
    name:"appSlice",
    initialState:{
        items:[],
    },
    reducers:{
        add:(state,action)=>{
            state.items.push(action.payload);

        },
        remove:(state,action)=>{
            state.items.splice(action.payload,1);

        },
        clear:(state)=>{
            state.items=[];
        }


    }
})
export const {add,remove,clear}=slice.actions;
export default slice.reducer;