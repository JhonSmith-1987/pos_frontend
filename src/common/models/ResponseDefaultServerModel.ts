export interface ResponseDefaultServerModel<t> {
    status: number;
    message: string;
    data: t
}