export interface AccountPostModel {
    business_name: string;
    business_address: string;
    business_phone: string;
    business_email: string;
    subscription_plan: string;
    account_status: string;
    image_logo: FileList;
}

export interface AccountRequestServerModel {
    business_name: string;
    business_address: string;
    business_phone: string;
    business_email: string;
    subscription_plan: string;
    account_status: string;
    image_logo: string;
}