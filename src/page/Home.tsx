import React, { useEffect } from "react";
import { GlobalStyle } from "../style/GlobalStyle";
import TodoBoard from "../component/TodoBoard";
import WriteTodo from "../component/WriteTodo";
import Header from "../component/Header";
import { useStore } from "../store/stroe";

export default function Home() {
	const fetchTodos = useStore((state) => state.fetchTodos);

	useEffect(() => {
		fetchTodos();
	}, []);

	return (
		<>
			<GlobalStyle />
			<Header />
			<WriteTodo />
			<TodoBoard />
		</>
	);
}
