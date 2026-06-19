import {axiosInstance} from "./axiosInstance.js";

const url='/expensetracker'

export const fetchExpense = ()=> axiosInstance.get(url);
export const addExpense = (data)=> axiosInstance.post(url,data);
export const deleteExpense = (id)=> axiosInstance.delete(`${url}/${id}`);
export const editExpense = (id,data)=> axiosInstance.put(`${url}/${id}`,data);

