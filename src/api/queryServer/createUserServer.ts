import axios from "axios";
import {urlApi} from "../urlApi.ts";
import {ResponseDefaultServerModel} from "../../common/models/ResponseDefaultServerModel.ts";
import {UserPostModel} from "../../modules/super-admin/models/UserPostModel.ts";
import {UserModel} from "../../common/models/UserModel.ts";

export async function createUserServer(data: UserPostModel): Promise<ResponseDefaultServerModel<UserModel|null>> {
    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${urlApi}/api/v1/user/create`,
        headers: {
            'Content-Type': 'application/json'
        },
        data : data
    };
    try {
        const response = await axios.request(config);
        return response.data;
    } catch (error:any) {
        console.error('Error al crear nuevo usuario');
        console.error(error);
        return error.response.data;
    }
}