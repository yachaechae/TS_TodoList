import React, { useState } from "react";
import { FormStyle, InputStyle, LabelStyle, SpanStyle } from "../style/InputStyle";
import { MasterBtn } from "../style/MasterBtn";
import { useAddTodo } from "../store/queryStore";

export default function WriteTodo() {
	const [title, setTitle] = useState<string>("");
	const [content, setContent] = useState<string>("");

	const addTodo = useAddTodo();
	const addBtn = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		addTodo.mutate({
			title,
			content,
			id: 0,
			isDone: false,
		});
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
