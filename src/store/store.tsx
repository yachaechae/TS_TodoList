// store.ts
import { SetState, State, create } from "zustand";
import { axiosAddTodo, axiosDeleteTodo, axiosFetchTodos, axiosToggleTodoStatus } from "../api/axios";
import { Todo } from "../types/todoType";

export interface TodoStore {
	todos: Todo[];
	addTodo: (todo: Todo) => void;
	toggleTodoStatus: (id: number, isDone: boolean) => void;
	deleteTodo: (id: number) => void;
	fetchTodos: () => void;
}

export const useStore = create<TodoStore>((set) => ({
	todos: [],
	addTodo: async (todo) => {
		const newTodo = await axiosAddTodo(todo);
		set((state) => ({ todos: [...state.todos, newTodo] }));
	},
	toggleTodoStatus: async (id, isDone) => {
		await axiosToggleTodoStatus(id, isDone);
		set((state) => ({
			todos: state.todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)),
		}));
	},
	deleteTodo: async (id) => {
		await axiosDeleteTodo(id);
		set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) }));
	},
	fetchTodos: async () => {
		const todos = await axiosFetchTodos();
		set(() => ({ todos }));
	},
}));
