import {AccountModel} from "../../../../common/models/AccountModel.ts";
import {ALL_ACCOUNTS} from "../types/accountTypes.ts";

export interface IStateAccount {
    allAccounts: AccountModel[];
}

const initialStateAccount: IStateAccount = {
    allAccounts: [],
}

const accountReducer = function (state = initialStateAccount, action: {type:any; payload:any}):IStateAccount {
    switch (action.type) {
        case ALL_ACCOUNTS:
            return {
                allAccounts: action.payload,
            };
        default:
            return state;
    }
}

export default accountReducer;