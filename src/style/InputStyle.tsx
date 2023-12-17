import styled from "styled-components";

export const FormStyle = styled.form`
	border: 1px solid #000;
	display: flex;
	justify-content: center;
	padding: 30px 30px 15px;
	align-items: center;
	& .inputBox {
		position: relative;
		margin: 10px;
	}
`;

export const InputStyle = styled.input`
	border: none;
	border-bottom: 1px solid #252a34;
	padding-bottom: 10px;
	background: transparent;
	z-index: 5;
	font-size: 1.2rem;

	&:focus {
		outline: none;
	}
	&:focus ~ label,
	&:valid ~ label {
		bottom: 40px;
		color: #252a34;
		font-weight: bold;
	}
	&:focus ~ span,
	&:valid ~ span {
		width: 100%;
	}
`;
export const LabelStyle = styled.label`
	position: absolute;
	color: #252a34;
	left: 10px;
	bottom: 8px;
	transition: all 0.2s;
	font-size: 1.2rem;
`;
export const SpanStyle = styled.span`
	display: block;
	position: absolute;
	bottom: 0;
	left: 0;
	background: #252a34;
	width: 0;
	height: 1px;
	border: 1px;
	transition: 0.5s;
`;
