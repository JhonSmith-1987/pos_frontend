import {AccountModel} from "../../../../common/models/AccountModel.ts";
import {ALL_ACCOUNTS} from "../types/accountTypes.ts";

export const setAllAccounts = (accounts: AccountModel[]) => (dispatch: (arg0: { type: string; payload: AccountModel[]; }) => void) => {
    dispatch({
        type: ALL_ACCOUNTS,
        payload: accounts
    });
}