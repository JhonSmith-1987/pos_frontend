import axios from "axios";
import {AccountRequestServerModel} from "../../modules/super-admin/models/AccountPostModel.ts";
import {urlApi} from "../urlApi.ts";
import {ResponseDefaultServerModel} from "../../common/models/ResponseDefaultServerModel.ts";
import {AccountModel} from "../../common/models/AccountModel.ts";

export async function createAccountServer(data: AccountRequestServerModel): Promise<ResponseDefaultServerModel<AccountModel|null>> {
    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${urlApi}/api/v1/account/create`,
        headers: {
            'Content-Type': 'application/json'
        },
        data : data
    };
    try {
        const response = await axios.request(config);
        return response.data
    } catch (error:any) {
        console.error('Error al crear nueva cuenta');
        console.error(error);
        return error.response.data;
    }
}