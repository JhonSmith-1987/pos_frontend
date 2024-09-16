import {FieldErrors, UseFormRegister} from "react-hook-form";
import {UserPostModel} from "../models/UserPostModel.ts";
import {useAppSelector} from "../../../hooks/storeHook.ts";
import FormComponent from "../../../common/components/FormComponent.tsx";
import InputTextComponent from "../../../common/components/InputTextComponent.tsx";
import InputEmailComponent from "../../../common/components/InputEmailComponent.tsx";
import SelectComponent from "../../../common/components/SelectComponent.tsx";
import {SelectModel} from "../../../common/models/SelectModel.ts";
import SelectWithListModelComponent from "../../../common/components/SelectWithListModelComponent.tsx";
import {AccountModel} from "../../../common/models/AccountModel.ts";

interface Props {
    register:UseFormRegister<UserPostModel>;
    errors: FieldErrors<UserPostModel>;
}

export default function CreateUserComponent({register, errors, }: Props) {

    const selectListUserType: SelectModel[] = [
        {field: 'User', value: 'user'},
        {field: 'Administration', value: 'admin'},
        {field: 'Super Administration', value: 'super_admin'},
    ];
    const selectListStatus: SelectModel[] = [
        {field: 'Active', value: 'active'},
        {field: 'Disabled', value: 'disabled'},
    ];
    const allAccounts = useAppSelector((state) => state.superAdminState.accountState.allAccounts);

    return (
        <FormComponent title={"Create New User"}>

            {/*input name*/}
            <InputTextComponent<UserPostModel>
                register={register}
                errors={errors}
                fieldName="name"
                label="User Name"
                id="name"
                placeholder="Enter your business name"
                typeInput="text"
            />

            {/*input email*/}
            <InputEmailComponent<UserPostModel>
                register={register}
                errors={errors}
                fieldName="email"
                id="email"
                label="Email"
                placeholder="Enter your email"
            />

            {/*input user type*/}
            <SelectComponent<UserPostModel>
                register={register}
                errors={errors}
                fieldName="user_type"
                label="User Type"
                id="user_type"
                selectList={selectListUserType}
                defaultValueOption="Select a user type"
            />

            {/*input account type*/}
            <SelectWithListModelComponent<UserPostModel, AccountModel>
                register={register}
                errors={errors}
                fieldName="account_id"
                label="Account Type"
                id="account_id"
                selectList={allAccounts}
                fieldOption="business_name"
                valueOption="id"
                defaultValueOption="Select a account"
            />

            {/*input status*/}
            <SelectComponent<UserPostModel>
                register={register}
                errors={errors}
                fieldName="status"
                label="Status"
                id="status"
                selectList={selectListStatus}
                defaultValueOption="Select a status"
            />

            {/*input password*/}
            <InputTextComponent<UserPostModel>
                register={register}
                errors={errors}
                fieldName="password"
                label="Password"
                id="password"
                placeholder="Enter your Password"
                typeInput="password"
            />

            {/*input repeat password*/}
            <InputTextComponent<UserPostModel>
                register={register}
                errors={errors}
                fieldName="repeat_password"
                label="Repeat Password"
                id="repeat_password"
                placeholder="Repeat your Password"
                typeInput="password"
            />

        </FormComponent>
    );
}

