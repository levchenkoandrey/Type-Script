import axios, {AxiosResponse} from "axios";
import {IUser} from "../interfaces/user-interface";

type IRes<T> = Promise<AxiosResponse<T>>
export const userService = {
    getAll:(): IRes<IUser[]> => axios('https://jsonplaceholder.typicode.com/users'),
    getById:(id:number): IRes<IUser> => axios('https://jsonplaceholder.typicode.com/users/'+ id),
}
// import axios from 'axios';
// import {IUser} from '../interfaces/user-interface';
//
// type IRes<T> = Promise<AxiosResponse<T>>
//
// export const userService = {
//     getAll: (): IRes<IUser[]> => axios('https://jsonplaceholder.typicode.com/users'),
//     getById: (id: number): IRes<IUser> => axios('https://jsonplaceholder.typicode.com/users/'+id),
// }