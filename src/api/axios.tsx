import axios from "axios";
import { Todo } from "../types/todoType";

export const url = axios.create({
	baseURL: process.env.REACT_APP_DB_SERVER_URL,
});

export const axiosFetchTodos = async () => {
	const res = await url.get(`/todos`);
	return res.data;
};

export const axiosAddTodo = async (todo: Todo) => {
	const res = await url.post(`/todos`, { ...todo, isDone: false });
	return res.data;
};

export const axiosToggleTodoStatus = async (id: number) => {
	await url.patch(`/todos/${id}`, { isDone: true });
};

export const axiosDeleteTodo = async (id: number) => {
	await url.delete(`/todos/${id}`);
};
