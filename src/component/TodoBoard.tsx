import React from "react";
import { useStore } from "../store/stroe";
import TodoCard from "./TodoCard";
import { BoardStyle, CategoryName } from "../style/TodoStyle";

export default function TodoBoard() {
	const todos = useStore((state) => state.todos);
	return (
		<>
			<CategoryName className="listTitle">Working 🧑‍💻</CategoryName>
			<BoardStyle>
				{todos.map((todoItem) => {
					if (!todoItem.isDone) {
						return <TodoCard key={todoItem.id} {...todoItem} />;
					}
				})}
			</BoardStyle>
			<CategoryName className="listTitle">Done! 🎊</CategoryName>
			<BoardStyle>
				{todos.map((todoItem) => {
					if (todoItem.isDone) {
						return <TodoCard key={todoItem.id} {...todoItem} />;
					}
				})}
			</BoardStyle>
		</>
	);
}
