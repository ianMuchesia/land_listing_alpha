import { configureStore} from "@reduxjs/toolkit"
import loadSlice from "./Features/loadSlice";
import authSlice from "./Features/authSlice";



export const store = configureStore({
    reducer:{
        load: loadSlice,
        auth: authSlice
    }
})



export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;