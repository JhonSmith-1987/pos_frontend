import axios from "axios";
import {urlApi} from "../urlApi.ts";
import {ResponseDefaultServerModel} from "../../common/models/ResponseDefaultServerModel.ts";
import {AccountModel} from "../../common/models/AccountModel.ts";

export async function getAllAccountServer(): Promise<ResponseDefaultServerModel<AccountModel[]>> {
    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${urlApi}/api/v1/account/all`,
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await axios.request(config);
        return response.data
    } catch (error:any) {
        console.error('Error al obtener todas las cuentas');
        console.error(error);
        return error.response.data;
    }
}