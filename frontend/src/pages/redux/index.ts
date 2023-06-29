import { configureStore} from "@reduxjs/toolkit"
import loadSlice from "./Features/loadSlice";



export const store = configureStore({
    reducer:{
        load: loadSlice,
    }
})



export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;