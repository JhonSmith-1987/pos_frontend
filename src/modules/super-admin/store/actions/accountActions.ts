import {AccountModel} from "../../../../common/models/AccountModel.ts";
import {ALL_ACCOUNTS} from "../types/accountTypes.ts";
import {getAllAccountServer} from "../../../../api/queryServer/getAllAccountServer.ts";
import {alertErrorToast} from "../../../../utils/alertErrorToast.ts";

export const setAllAccounts = () => async (dispatch: (arg0: { type: string; payload: AccountModel[]; }) => void) => {
    const response = await getAllAccountServer();
    if (response.status !== 200) {
        alertErrorToast(response.message);
        dispatch({
            type: ALL_ACCOUNTS,
            payload: []
        });
    }
    dispatch({
        type: ALL_ACCOUNTS,
        payload: response.data
    });
}