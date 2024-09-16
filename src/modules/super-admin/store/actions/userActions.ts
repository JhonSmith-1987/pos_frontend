import {UserModel} from "../../../../common/models/UserModel.ts";
import {getAllUserServer} from "../../../../api/queryServer/getAllUserServer.ts";
import {alertErrorToast} from "../../../../utils/alertErrorToast.ts";
import {ALL_USERS} from "../types/userTypes.ts";

export const setAllUsers = (page:number, size: number) => async (dispatch: (arg0: { type: string; payload: UserModel[]; }) => void) => {
    const response = await getAllUserServer(page, size);
    console.log(response);
    if (response.status !== 200) {
        alertErrorToast(response.message);
        dispatch({
            type: ALL_USERS,
            payload: []
        });
        return;
    }
    dispatch({
        type: ALL_USERS,
        payload: response.data
    });
}