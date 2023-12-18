import React from "react";
import { GlobalStyle } from "../style/GlobalStyle";
import TodoBoard from "../component/TodoBoard";
import WriteTodo from "../component/WriteTodo";
import Header from "../component/Header";

export default function Home() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<WriteTodo />
			<TodoBoard />
		</>
	);
}
