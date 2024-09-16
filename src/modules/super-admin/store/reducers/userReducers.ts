import {UserModel} from "../../../../common/models/UserModel.ts";
import {ALL_USERS} from "../types/userTypes.ts";


export interface IStateAccount {
    allUser: UserModel[];
}

const initialStateAccount: IStateAccount = {
    allUser: [],
}

const userReducer = function (state = initialStateAccount, action: {type:any; payload:any}):IStateAccount {
    switch (action.type) {
        case ALL_USERS:
            return {
                allUser: action.payload,
            };
        default:
            return state;
    }
}

export default userReducer;