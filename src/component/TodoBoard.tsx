import React from "react";
import TodoCard from "./TodoCard";
import { BoardStyle, CategoryName } from "../style/TodoStyle";
import { useTodos } from "../store/queryStore";

export default function TodoBoard() {
	const { data: todos } = useTodos();
	return (
		<>
			<CategoryName className="listTitle">Working 🧑‍💻</CategoryName>
			<BoardStyle>
				{todos?.map((todoItem) => {
					if (!todoItem.isDone) {
						return <TodoCard key={todoItem.id} {...todoItem} />;
					}
				})}
			</BoardStyle>
			<CategoryName className="listTitle">Done! 🎊</CategoryName>
			<BoardStyle>
				{todos?.map((todoItem) => {
					if (todoItem.isDone) {
						return <TodoCard key={todoItem.id} {...todoItem} />;
					}
				})}
			</BoardStyle>
		</>
	);
}
