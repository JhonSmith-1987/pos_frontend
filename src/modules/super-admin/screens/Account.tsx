import {useEffect, useState} from "react";
import CreateAccountComponent from "../components/CreateAccountComponent.tsx";
import Modal from "../../../common/components/Modal.tsx";
import {useForm} from "react-hook-form";
import {AccountPostModel, AccountRequestServerModel} from "../models/AccountPostModel.ts";
import {uploadFile} from "../../../firebase/firebase-config.ts";
import {createAccountServer} from "../../../api/queryServer/createAccountServer.ts";
import {alertErrorToast} from "../../../utils/alertErrorToast.ts";
import {alertSuccessToast} from "../../../utils/alertSuccessToast.ts";
import LoadingSuspense from "../../../common/components/LoadingSuspense.tsx";
import {useAppDispatch, useAppSelector} from "../../../hooks/storeHook.ts";
import {setAllAccounts} from "../store/actions/accountActions.ts";
import {AccountModel} from "../../../common/models/AccountModel.ts";
import TableComponent from "../../../common/components/TableComponent.tsx";


export default function Account() {

    const dispatch = useAppDispatch();
    const {
        register: registerCreate,
        formState: {errors: errorsCreate},
        handleSubmit: handleSubmitCreate,
        reset: resetCreate,
    } = useForm<AccountPostModel>();
    const allAccounts = useAppSelector((state) => state.superAdminState.accountState.allAccounts);
    const accountColumns: (keyof AccountModel)[] = ['business_name', 'business_email', "account_status", "business_phone"];
    const accountColumnTranslations = {
        business_name: 'Nombre',
        business_email: 'Email',
        account_status: 'Estado',
        business_phone: 'Teléfono'
    }
    const [isShowCreateAccount, setIsShowCreateAccount] = useState<boolean>(false);
    const [isLoadingCreateAccount, setIsLoadingCreateAccount] = useState<boolean>(false);

    async function handleCreateAccount(data: AccountPostModel) {
        console.log('Estos son los datos del formulario crear cuenta:', data);
        setIsLoadingCreateAccount(true);
        const file = data.image_logo[0];
        const image_string = await uploadFile(file, file.name);
        const account: AccountRequestServerModel = {
            business_name: data.business_name,
            account_status: data.account_status,
            business_address: data.business_address,
            business_email: data.business_email,
            business_phone: data.business_phone,
            subscription_plan: data.subscription_plan,
            image_logo: image_string
        }
        const response = await createAccountServer(account);
        console.log('respuesta del servidor al crear una cuenta');
        console.log(response);
        if (response.status === 200) {
            dispatch(setAllAccounts()).then(() => {
                alertSuccessToast(response.message);
                resetCreate();
                setIsShowCreateAccount(false);
                setIsLoadingCreateAccount(false);
            });
            return;
        }
        setIsLoadingCreateAccount(false);
        alertErrorToast(response.message);
    }

    useEffect(() => {
        dispatch(setAllAccounts()).then(() => {});
    }, [dispatch]);

    return (
        <div className="relative bg-white shadow sm:rounded-lg h-screen flex flex-col">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Accounts</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">List of all accounts with basic information.</p>
            </div>
            <div className="px-4 py-3 text-right sm:px-6">
                <button
                    onClick={() => setIsShowCreateAccount(true)}
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Add New Account
                </button>
            </div>
            {/* Contenedor con scroll */}
            <div className="border-t border-gray-200 overflow-y-auto px-4 py-5 flex-grow">
                <dl>
                    <TableComponent
                        data={allAccounts}
                        columns={accountColumns}
                        columnTranslations={accountColumnTranslations}
                    />
                </dl>
            </div>

            {/*create account modal*/}
            <Modal
                isOpen={isShowCreateAccount}
                closeModal={(action) => setIsShowCreateAccount(action)}
                textButtonConfirm="Create Account"
                textButtonCancel="Cancel"
                onClickConfirm={handleSubmitCreate(handleCreateAccount)}
                isLoading={isLoadingCreateAccount}
                textIsLoading='Creando...'
            >
                <CreateAccountComponent
                    register={registerCreate}
                    errors={errorsCreate}
                />
            </Modal>

            {/*is loading create account*/}
            {isLoadingCreateAccount &&
                <LoadingSuspense
                    text={'Creando cuenta...'}
                />
            }
        </div>
    );
}