import axios from "axios";
import {urlApi} from "../urlApi.ts";
import {ResponseDefaultServerModel} from "../../common/models/ResponseDefaultServerModel.ts";
import {UserModel} from "../../common/models/UserModel.ts";

export async function getAllUserServer(page:number, size: number): Promise<ResponseDefaultServerModel<UserModel[]>> {
    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${urlApi}/api/v1/user/all_user?page=${page.toString()}&size=${size.toString()}`,
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