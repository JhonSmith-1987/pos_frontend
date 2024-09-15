import {configureStore} from "@reduxjs/toolkit";
import RootReducer from "./rootReducer.ts";

export const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false
    }),
    reducer: RootReducer
});
export type AdminState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;