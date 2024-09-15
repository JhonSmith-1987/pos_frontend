import {combineReducers} from "@reduxjs/toolkit";
import accountReducer from "./accountReducers.ts";

const superAdminReducer = combineReducers({
    accountState: accountReducer,
});
export default superAdminReducer;