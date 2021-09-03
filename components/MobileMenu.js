import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { colors } from '../themes';

export default function MobileMenu({
	visible,
	setVisible
}) {
	return (
		<>
			<StyledMenu visible={visible}>
				<Link href="/menu" className="" passHref>
					<StyledNavLink
						onClick={(visible) =>
							setVisible(!visible)
						}
					>
						<p>Menu</p>
					</StyledNavLink>
				</Link>
				<Link href="/about" className="" passHref>
					<StyledNavLink
						onClick={(visible) =>
							setVisible(!visible)
						}
					>
						<p>About</p>
					</StyledNavLink>
				</Link>
				<Link href="/hours" className="" passHref>
					<StyledNavLink
						onClick={(visible) =>
							setVisible(!visible)
						}
					>
						<p>Hours</p>
					</StyledNavLink>
				</Link>
				<Link href="/contact" className="" passHref>
					<StyledNavLink
						onClick={(visible) =>
							setVisible(!visible)
						}
					>
						<p>Contact</p>
					</StyledNavLink>
				</Link>
				<Link href="/" className="" passHref>
					<StyledNavLink
						onClick={(visible) =>
							setVisible(!visible)
						}
					>
						<p>Home</p>
					</StyledNavLink>
				</Link>
			</StyledMenu>
		</>
	);
}

const StyledMenu = styled.div`
	background-color: ${colors.grayChateau};
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 80%;
	height: 100%;
	text-align: left;
	padding: 4rem 2rem 2rem 2rem;
	position: fixed;
	top: 0;
	left: 0;
	transition: transform 0.3s ease-in-out;
	z-index: 10;
	opacity: 99%;
	transform: translateX(-100%);
	transform: ${({ visible }) =>
		visible ? 'translateX(0)' : 'translateX(-100%)'};

	&:focus {
		outline: none;
	}
`;
const StyledNavLink = styled.div`
	font-size: 2rem;
	text-transform: uppercase;
	padding: 1rem 0;
	font-weight: bold;
	letter-spacing: 0.5rem;
	color: ${colors.darkText};
	text-decoration: none;
	transition: color 0.3s linear;
`;
