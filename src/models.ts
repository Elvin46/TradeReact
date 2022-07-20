export interface IAsyncData<T>{
    error?: string;
    data?: T;
    loading?: boolean;
}
