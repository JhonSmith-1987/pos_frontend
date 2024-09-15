import {combineReducers} from "@reduxjs/toolkit";
import superAdminReducer from "../../modules/super-admin/store/reducers/superAdminReducers.ts";

const RootReducer = combineReducers({
    superAdminState: superAdminReducer,
});
export default RootReducer;