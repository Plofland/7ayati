import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { colors } from '../themes';

export default function MobileMenu({visible}) {
	return (
		<>
			<StyledMenu visible={visible}>
				<Link href="/menu" className="" passHref>
					<StyledNavLink>
						<p>Menu</p>
					</StyledNavLink>
				</Link>
				<Link href="/about" className="" passHref>
					<StyledNavLink>
						<p>About</p>
					</StyledNavLink>
				</Link>
				<Link href="/hours" className="" passHref>
					<StyledNavLink>
						<p>Hours</p>
					</StyledNavLink>
				</Link>
				<Link href="/contact" className="" passHref>
					<StyledNavLink>
						<p>Contact</p>
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
	height: 100vh;
	text-align: left;
	padding: 2rem;
	position: absolute;
	top: 0;
	left: 0;
	transition: transform 0.3s ease-in-out;
	z-index: 10;
	transform: translateX(-100%);
	transform: ${({ visible }) => visible ? 'translateX(0)' : 'translateX(-100%)'};

	&:focus {
		outline: none;
	  }
`;
const StyledNavLink = styled.div`
	font-size: 2rem;
	text-transform: uppercase;
	padding: 2rem 0;
	font-weight: bold;
	letter-spacing: 0.5rem;
	color: ${colors.darkText};
	text-decoration: none;
	transition: color 0.3s linear;
`;
