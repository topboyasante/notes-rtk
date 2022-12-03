import { configureStore } from "@reduxjs/toolkit";
import { noteSlice } from "./noteSlice";

// Create A Store
export const store = configureStore({
    reducer:{
        notes:noteSlice.reducer
    }
})