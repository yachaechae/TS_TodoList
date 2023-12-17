import React, { useState } from "react";
import { FormStyle, InputStyle, LabelStyle, SpanStyle } from "../style/InputStyle";
import { MasterBtn } from "../style/MasterBtn";
import { useStore } from "../store/stroe";

const defaultInput = {
	todoId: 0,
	todoTitle: "",
	todoContent: "",
	isDone: false,
};

export default function WriteTodo() {
	const [title, setTitle] = useState<string>("");
	const [content, setContent] = useState<string>("");

	const [todo, setTodo] = useState(defaultInput);

	// const todoText = (e: React.ChangeEvent) => {
	// 	const { name, value } = e.target;

	// 	setTodo({
	// 		...todo,
	// 		[name]: value,
	// 	});
	// };

	const addTodo = useStore((state) => state.addTodo);
	const addBtn = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		addTodo({
			title,
			content,
			id: 0,
			isDone: false,
		});
		setTitle("");
		setContent("");
	};

	return (
		<>
			<FormStyle onSubmit={addBtn}>
				<div className="inputBox">
					<InputStyle
						type="text"
						id="todoTitle"
						name="todoTitle"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
						autoFocus
					/>
					<LabelStyle htmlFor="todoTitle">제목</LabelStyle>
					<SpanStyle />
				</div>
				<div className="inputBox">
					<InputStyle
						type="text"
						id="todoContent"
						name="todoContent"
						value={content}
						onChange={(e) => setContent(e.target.value)}
						required
					/>
					<LabelStyle htmlFor="todoContent">내용</LabelStyle>
					<SpanStyle />
				</div>
				<MasterBtn $hoverColor="#0095ff" $fontColor="#fff">
					추가하기
				</MasterBtn>
			</FormStyle>
		</>
	);
}