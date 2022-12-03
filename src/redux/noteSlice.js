import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

// A Slice is an object, that takes in a name, initialState(also an Object), and some reducer functions(an object with functions)
export const noteSlice = createSlice({
    name:'note',
    initialState:{
        notes:[
          
        ]
    },
    reducers:{
        addNotes(state,action){
            state.notes.push(action.payload)
        },
        editNotes(){

        },
        deleteNotes(){

        }
    }
})

export const {addNotes} = noteSlice.actions
export default noteSlice.reducer