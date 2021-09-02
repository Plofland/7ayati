import React from 'react';
import styled from 'styled-components';
import { colors } from '../themes';

export default function Hamburger({ visible, setVisible }) {
	return (
		<BarContainer
			visible={visible}
			onClick={() => setVisible(!visible)}
		>
			<div />
			<div />
			<div />
		</BarContainer>
	);
}

const BarContainer = styled.button`
	display: flex;
	color: ${colors.grayChateau};
	position: absolute;
	top: 2rem;
	left: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 2rem;
	height: 2rem;
	background: transparent;
	border: none;
	position: fixed;
    transform: ${({ visible }) =>
				visible ? 'translateX(60vw)' : 'translateX(0)'};
    transition: .3s ease-in-out;
	cursor: pointer;
	padding: 0;
	z-index: 12;

	&:focus {
		outline: none;
	}

	div {
		width: 2rem;
		height: 0.25rem;
		background: ${({ visible }) =>
			visible
				? colors.darkLavender
				: colors.lightLavender};
		border-radius: 10px;
		transition: all 0.3s linear;
		position: relative;
		transform-origin: 1px;

		:first-child {
			transform: ${({ visible }) =>
				visible ? 'rotate(48deg)' : 'rotate(0)'};
		}

		:nth-child(2) {
			opacity: ${({ visible }) =>
				visible ? '0' : '1'};
			transform: ${({ visible }) =>
				visible
					? 'translateX(20px)'
					: 'translateX(0)'};
		}

		:nth-child(3) {
			transform: ${({ visible }) =>
				visible ? 'rotate(-48deg)' : 'rotate(0)'};
		}
	}
`;
