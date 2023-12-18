import { useQuery, useMutation, useQueryClient } from "react-query";
import { Todo } from "../types/todoType";
import { axiosAddTodo, axiosDeleteTodo, axiosFetchTodos, axiosToggleTodoStatus } from "../api/axios";

const useTodos = () => {
	return useQuery<Todo[]>("todos", axiosFetchTodos);
};

const useAddTodo = () => {
	const queryClient = useQueryClient();
	return useMutation((todo: Todo) => axiosAddTodo(todo), {
		onSuccess: () => {
			queryClient.invalidateQueries("todos");
		},
	});
};

const useToggleTodoStatus = () => {
	const queryClient = useQueryClient();
	return useMutation(({ id, isDone }: { id: number; isDone: boolean }) => axiosToggleTodoStatus(id, isDone), {
		onSuccess: () => {
			queryClient.invalidateQueries("todos");
		},
	});
};

const useDeleteTodo = () => {
	const queryClient = useQueryClient();
	return useMutation((id: number) => axiosDeleteTodo(id), {
		onSuccess: () => {
			queryClient.invalidateQueries("todos");
		},
	});
};

export { useTodos, useAddTodo, useToggleTodoStatus, useDeleteTodo };
