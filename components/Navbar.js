import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import hayatiLogo from '../public/Fayati logo no bg 200px.png';
import { colors, mq } from '../themes';

export default function Navbar() {
	console.log(hayatiLogo)
	return (
		<>
			<StyledLogoBG />
			<StyledNav>
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
				<StyledLogo>
					<Link href="/" className="">
						<a>
							<img
								src={hayatiLogo.src}
								alt="7ayati company logo"
							/>
						</a>
					</Link>
				</StyledLogo>
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
			</StyledNav>
		</>
	);
}

const StyledLogo = styled.div`
	margin-bottom: -7%;
	img {
		height: 150px;
	}
`;

const StyledLogoBG = styled.div`
	background-color: ${colors.grayChateau};
	border-radius: 50%;
	width: 26%;
	height: 20%;
	position: absolute;
	z-index: -1;
	margin: 0 35.5%;
`;

const StyledNav = styled.nav`
	background-color: ${colors.grayChateau};
	display: flex;
	justify-content: space-evenly;
`;

const StyledNavLink = styled.div`
	font-family: 'Great Vibes', cursive;
	color: ${colors.darkText};
	padding: 1rem;
	font-weight: bold;
	font-size: 2rem;
	cursor: pointer;
`;
