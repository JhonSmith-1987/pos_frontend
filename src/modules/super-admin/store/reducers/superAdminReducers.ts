import {combineReducers} from "@reduxjs/toolkit";
import accountReducer from "./accountReducers.ts";
import userReducer from "./userReducers.ts";

const superAdminReducer = combineReducers({
    accountState: accountReducer,
    userState: userReducer,
});
export default superAdminReducer;