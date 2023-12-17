import styled from "styled-components";

interface MasterBtnProps {
	$hoverColor?: string;
	$fontColor?: string;
}

const defaultBgColor = "fff";
const fontColor = "#000";

export const MasterBtn = styled.button<MasterBtnProps>`
	cursor: pointer;
	border: 2px solid ${(props) => props.$hoverColor || "#0095ff"};
	border-radius: 15px;
	padding: 0.5rem 0.7rem;
	font-weight: 600;
	font-size: 1rem;
	background: ${defaultBgColor};
	color: ${fontColor};

	&:hover {
		background: ${(props) => props.$hoverColor || defaultBgColor};
		color: ${(props) => props.$fontColor || fontColor};
	}
`;
