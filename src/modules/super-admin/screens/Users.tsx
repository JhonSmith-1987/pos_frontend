import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {alertErrorToast} from "../../../utils/alertErrorToast.ts";
import {alertSuccessToast} from "../../../utils/alertSuccessToast.ts";
import {useAppDispatch, useAppSelector} from "../../../hooks/storeHook.ts";
import TableComponent from "../../../common/components/TableComponent.tsx";
import {UserPostModel} from "../models/UserPostModel.ts";
import {createUserServer} from "../../../api/queryServer/createUserServer.ts";
import Modal from "../../../common/components/Modal.tsx";
import CreateUserComponent from "../components/CreateUserComponent.tsx";
import {UserModel} from "../../../common/models/UserModel.ts";
import {setAllUsers} from "../store/actions/userActions.ts";
import {setAllAccounts} from "../store/actions/accountActions.ts";


export default function Users() {

    const dispatch = useAppDispatch();
    const {
        register: registerCreate,
        formState: {errors: errorsCreate},
        handleSubmit: handleSubmitCreate,
        reset: resetCreate,
    } = useForm<UserPostModel>();
    const userColumns: (keyof UserModel)[] = ['name', 'email', "user_type", "status"];
    const userColumnTranslations = {
        name: 'Name',
        email: 'Email',
        user_type: 'User type',
        status: 'Status',
    }
    const allUser = useAppSelector((state) => state.superAdminState.userState.allUser);
    const [isShowCreateUser, setIsShowCreateUser] = useState<boolean>(false);
    const [isLoadingCreateUser, setIsLoadingCreateUser] = useState<boolean>(false);

    async function handleCreateUser(data: UserPostModel) {
        console.log('Estos son los datos del formulario crear usuario:', data);
        setIsLoadingCreateUser(true);
        const response = await createUserServer(data);
        console.log('respuesta del servidor al crear un usuario');
        console.log(response);
        if (response.status === 200) {
            dispatch(setAllUsers(0, 40)).then(() => {
                alertSuccessToast(response.message);
                resetCreate();
                setIsShowCreateUser(false);
                setIsLoadingCreateUser(false);
            });
            return;
        }
        setIsLoadingCreateUser(false);
        alertErrorToast(response.message);
    }

    useEffect(() => {
        dispatch(setAllUsers(0, 40)).then();
        dispatch(setAllAccounts()).then();
    }, [dispatch]);

    return (
        <div className="relative bg-white shadow sm:rounded-lg h-screen flex flex-col">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Users</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">List of all users with basic information.</p>
            </div>
            <div className="px-4 py-3 text-right sm:px-6">
                <button
                    onClick={() => setIsShowCreateUser(true)}
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Add New User
                </button>
            </div>
            {/* Contenedor con scroll */}
            <div className="border-t border-gray-200 overflow-y-auto px-4 py-5 flex-grow">
                <dl>
                    <TableComponent
                        data={allUser}
                        columns={userColumns}
                        columnTranslations={userColumnTranslations}
                    />
                </dl>
            </div>

            {/*modal create user*/}
            <Modal
                isOpen={isShowCreateUser}
                textButtonConfirm="Create User"
                textButtonCancel="Cancel"
                closeModal={(action) => setIsShowCreateUser(action)}
                onClickConfirm={handleSubmitCreate(handleCreateUser)}
                isLoading={isLoadingCreateUser}
                textIsLoading="Creating User..."
            >
                <CreateUserComponent
                    errors={errorsCreate}
                    register={registerCreate}
                />
            </Modal>
        </div>
    );
}