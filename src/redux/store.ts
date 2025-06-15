import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./features/counter/counterSLice"
export const store=configureStore({
    reducer:{
        counter:CounterReducer
    }
})