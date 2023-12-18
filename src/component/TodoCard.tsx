import React from "react";
import { Todo } from "../types/todoType";
import { BtnGroup, CardStyle, ContentStyle, TitleStyle } from "../style/TodoStyle";
import { MasterBtn } from "../style/MasterBtn";
import { useStore } from "../store/store";

const TodoCard = ({ id, title, content, isDone }: Todo) => {
	const toggleTodoStatus = useStore((state) => state.toggleTodoStatus);
	const deleteTodo = useStore((state) => state.deleteTodo);

	return (
		<CardStyle className={`todo-item ${isDone ? "done" : "working"}`}>
			<TitleStyle>{title}</TitleStyle>
			<ContentStyle>{content}</ContentStyle>
			<BtnGroup>
				<MasterBtn $hoverColor="#06a006" $fontColor="#fff" onClick={() => toggleTodoStatus(id, !isDone)}>
					{isDone ? "취소" : "완료"}
				</MasterBtn>
				<MasterBtn $hoverColor="#a61109" $fontColor="#fff" onClick={() => deleteTodo(id)}>
					삭제
				</MasterBtn>
			</BtnGroup>
		</CardStyle>
	);
};

export default TodoCard;
